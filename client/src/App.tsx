import React, { ReactNode ,FC, ReactElement, useEffect} from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Register from './pages/register/Register';
import './App.css';
import Login from './pages/login/Login';
import Product from './components/product/Product';
import ProductList from './pages/productList/ProductList';
import SingleProduct from './pages/singleProduct/SingleProduct';
import Cart from './pages/cart/Cart';
import Pay from './components/Pay/Pay';
import Success from './components/success/Success';
import { useAppSelector } from './hooks';
import PayErr from './components/PayErr';

function App() {
  const user = useAppSelector(state=>state.user.currentUser);
  console.log(user)
  const ProtectedRoute=({ children }) => {
    const user = useAppSelector(state=>state.user.currentUser);
    console.log(user)
     return user?children :<Navigate to='/login'/> }

  return (
   <>
    <div className="App">
     <Router>
        <Routes>
            <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path='/products/:category' element={<ProductList/>}></Route>
            <Route path='/product/:id' element = {<SingleProduct/>}></Route>
            <Route path='/cart' element = {<Cart/>}></Route>
            <Route path='/pay' element = {<Pay/>}></Route>
            <Route path='/success' element = {<Success/>}></Route>
            <Route path='/login' element = {user? <Navigate to='/'/> : <Login/>}></Route>
            <Route path='/register' element = {<Register/>}></Route>
            <Route path='/errorPay' element = {<PayErr/>}></Route>
        </Routes>
     </Router>
    </div>
   </>
  );
}

export default App;
