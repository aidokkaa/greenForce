import React from 'react'
import './product.css';
import { FaShoppingCart } from "react-icons/fa";
import { ProductItem } from '../products/Products'
import { Link } from 'react-router-dom'



const Product=(props) => {
  console.log(props)
  return (
 <>
  <Link to = {`/product/${props.item._id}`}>
      <h3 className='h2T'>{props.item.title}</h3>
       <div className="card">
        <div className="image">
          <img className = 'cardImg1' src={props.item.img1} alt="" />
          <div className="info">
             <FaShoppingCart className='icon'/>
          </div>        
        </div> 
          </div>
          </Link>
          </>
  )
}

export default Product