import React from 'react'
import './success.css';
import { FaCheck } from "react-icons/fa";
import { useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
const Success = () => {
  const address = useAppSelector(state=>state.pay.billing_details.address);
  const name = useAppSelector(state=>state.pay.billing_details.name);
  const cart= useAppSelector(state => state.cart)
  const [time,setTime]=React.useState(new Date());
  const [randomNumber,setRandomNumber]=React.useState(0);
  React.useEffect(()=>{
    const timerId = setInterval(()=>{
         setTime(new Date())
    },1000);
    return ()=>clearInterval(timerId)
  },[]);
  React.useEffect(()=>{
    const number = Math.floor(1000000+Math.random()*9000000);
    setRandomNumber(number)
  },[])
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate()+7)
  return (
    <div className="background">
          <div className='container section-padding'>
      <h3 style={{textAlign:"center",color:"#83b81d",marginTop:"40px"}}>Payment processed successfully! <FaCheck className='pcheck' /></h3>
      <div className="paymentCheck">
        <h2>GreenForce</h2>
       <div className="address">
       <b><p>Delivery address</p></b><span>{address.country}</span>,<span>{address.city}</span>,<span>{address.line1}</span>
       </div>
       <div className="resip">
       <b><p>Recipient</p></b>
       <p>{name}</p>
       </div>
       <div className="time">
        <b> <p>Order time</p></b>
         <p>{time.toLocaleDateString()}</p>
       </div>
       <div className="number">
        <b><p>Order number</p></b>
        <p>#{randomNumber}</p>
       </div>
       <div className="total">
        <b><p>Total purchase</p></b>
        <p>${cart.total}</p>
       </div>
       <div className='delivery'>
        <b><p>Delivery time</p></b>
        <p>{deliveryDate.toLocaleDateString()}</p>
       </div>
      </div>
      <Link className='back' to ='/'> <IoMdArrowBack className='backI'/>Back to shopping</Link>
    </div>
    </div>
  )
}

export default Success