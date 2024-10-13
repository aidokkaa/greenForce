import React from 'react'
import './productList.css'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'
const ProductList = () => {
  const location = useLocation();
 const cat=location.pathname.split('/')[2]
 const [filters,setFilters]=React.useState('');
 const [sort,setSort]=React.useState('newest')
 
  return (
    <div>
      <Header></Header>
         <Products cat = {cat} filters = {filters} sort={sort}></Products>
        <Footer></Footer>
    </div>
  )
}

export default ProductList