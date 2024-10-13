import React from 'react'
import './products.css'
import Product from  '../product/Product'
import axios from 'axios'

export type ProductItem= {
    id:number,
    img:string,
    title:string,
    price? :number,
    desc:string
}
type Props ={
    cat:string,
    sort?:string,
    filters:string
}

const Products: React.FC<Props> = ({cat,sort,filters}) => {
   const [products,setProducts]=React.useState([]);
   React.useEffect(()=>{
     const getProds = async()=>{
        try{
           const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`
            :"http://localhost:5000/api/products"
           )
           setProducts(res.data)
           console.log(products)
        }
        catch(err){

        }
     }
     getProds()
   },[cat])
   React.useEffect(()=>{
    const filterProds = async()=>{
        const res = await axios.get(`http://localhost:5000/api/products?size=${filters}`)
        console.log(res)
    }
    filterProds()
   },[filters])
  return (
    <div>
      <div className="cardContainer">
      <div className="cardWrap">
      {
            products.map((item)=>(
                <>
                <Product item={item} key={item.id}></Product>
                </>
            ))
        }
      </div>
       </div>
       
    </div>
  )
}

export default Products