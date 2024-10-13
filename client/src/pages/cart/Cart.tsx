import React from 'react'
import './cart.css'
import Header from '../../components/header/Header'
import { useAppSelector } from '../../hooks'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks';
import { MdDelete } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { deleteProduct,clearCartAction,increaseQuantity,decreaseQuantity } from '../../redux/cartReduxSlice'
const Cart = () => {
  const cart= useAppSelector(state => state.cart)
  const cartProducts = useAppSelector(state => state.cart.products);
  const userId = useAppSelector(state => state.user.currentUser._id);
  const dispatch = useAppDispatch();
  const handleDelete =(productId)=>{
    dispatch(deleteProduct({productId,userId}));
}
  const clearCart=()=>{
  dispatch(clearCartAction())
  }
  const handleIncrease=(productId)=>{
    dispatch(increaseQuantity({productId,userId}))
  }
  const handleDecrease=(productId)=>{
    dispatch(decreaseQuantity({productId,userId}))
  }
  return (
    <div>
        <Header></Header>
       <div className='container section-padding'>
      <h1>Your Bag</h1>=
        <div className="direct">
            <Link to="/">
            <div className="continue">Continue Shopping</div></Link>
            {
        cartProducts.length ===0 ?
        ''
        :(
            <div  className='clear' onClick={clearCart}><MdDeleteForever className='delCart' />Clear cart</div>
        )
       }
        </div>
          <div className="flexCart">
          <div className="cartBody">
     <div className="itemsBody">
     {!cartProducts.length ? (
            <div className="emptyCart">
                <h2>Cart is empty</h2>
                <div><img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" /></div>
            </div>
        ) : (
            cartProducts.map((product:any) => {
        return (
            <div className="cartItem" key={product.product._id}>
                    <div className="orderItem">
                        <div className="itemImg">
                            <img src={product.product.img1} alt="" />
                        </div>
                        <div className="itemInfo">
                            <p>{product.product.title}</p>
                        </div>
                    </div>
                    <div className="itemPrice">
                        <div className="buttons">
                            <div onClick={()=>handleDecrease(product.product._id)} className="decrease">-</div>
                            <span>{product.quantity}</span>
                            <div onClick={()=>handleIncrease(product.product._id)} className="increase">+</div>
                        </div>
                        <div className="price">${product.quantity * Number(product.price)}</div>
                  <div className="removeButton" onClick={() => handleDelete(product.product._id)}>
                  <MdDelete className='deleteI' />
</div>
                    </div>
                </div>
            )})
        )}
        </div>
        <div className="orderSummary">
            <h2>ORDER SUMMARY</h2>
            <div className="orderBox">
            <span><b>Subtotal</b>: ${Number(cart.total).toFixed(2)}</span>
              <span><b>Shipping discount</b>: -$5.90</span>
              <span><b>Total</b>: ${cart.total && (cart.total - 5.90).toFixed(2)}</span>
              <Link to='/pay'>
            <div className="check">Checkout now</div></Link>
            </div>
           </div></div> 
    
       </div>
    </div>
    </div>
  )
}

export default Cart