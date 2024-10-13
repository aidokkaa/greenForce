import React, { useEffect, useState } from 'react';
import { publicRequest } from '../../requestMethods';
import './popular.css'
import Loader from '../Loader';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imgUrl: string;
}

const PopularProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const response = await publicRequest.get('/products/popular');
        console.log(response.data)
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching popular products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularProducts();
  }, []);

  if (loading) {
    return <div><Loader/></div>;
  }

  return (
    <div className='section container '>
      <h2 className='pTitle'>Popular Microgreens</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product._id} className="product-item">
            <img src={product.imgUrl} alt={product.title} />
            <h3>{product.title}</h3>
             <div className="flexdiv">
             <p className='prodP'>${product.price.toFixed(2)}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularProducts;
