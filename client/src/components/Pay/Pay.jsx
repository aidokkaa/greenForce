import React from 'react';
import './pay.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';                       
import StripeCheckout from 'react-stripe-checkout';
import { addPay } from '../../redux/paySlice';
const KEY = process.env.REACT_APP_STRIPE;
const Pay = () => {
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const [stripeToken, setStripeToken] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    const makeRequest = async () => {
      if (stripeToken) {
        try {
          const res = await axios.post("http://localhost:5000/api/checkout/payment", {
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          });
          dispatch(addPay(res.data)); 
          navigate("/success");
          console.log(res.data);
        } catch (err) {
          navigate("/errorPay")
        }
      }
    };
    makeRequest();
  }, [stripeToken, cart.total, dispatch]);

  const onToken = (token) => {
    setStripeToken(token); 
  };

  return (
    <div className='divS'>
      <StripeCheckout 
        token={onToken}
        stripeKey={KEY}
        billingAddress
        shippingAddress
        description={`Your total is $${(cart.total - 5.90).toFixed(2)}`}
        amount={cart.total * 100}
        name="Green Shop" 
        currency="USD"
      />
    </div>
  );
};

export default Pay;
