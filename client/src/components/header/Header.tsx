import React from 'react'
import { useAppDispatch,useAppSelector } from '../../hooks';
import {logout} from '../../redux/userSlice'
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IoIosLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { resetCart } from '../../redux/cartReduxSlice';
import './header.css'
const Header = () => {
    const quantity = useAppSelector(state=>state.cart.products);
    const user = useAppSelector(state=>state.user.currentUser);
    const [openBurger,setOpenBurger]=React.useState(false)
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
     const handleLogout=()=>{
         dispatch(logout());
         dispatch(resetCart())
         navigate('/login')
       }
       const handleMenuClick = () => {
        setOpenBurger(!openBurger)
    };
    const handleCloseMenu = () => {
      setOpenBurger(!openBurger)
    };
  return (
    <div className='header'>
       <div className="logo">
        GreenForce
       </div>
    <div className="divMenu">
    <div className="menu">
    <span >Catalog</span>
      <span >About</span>
      <span >FAQ</span>
          </div>
        <div className="menuItem">
        {
             user ? '' : 'Sign up'
         }
        {
             user ? <p className='regUser'><FaRegUser/>  {user.username}</p> : 'Sign in'
         }
          <Link to = '/cart'>
             <Badge badgeContent={quantity.length}
             color='secondary'
              style={{color:"white"}}>
             <ShoppingCartOutlinedIcon/>Cart</Badge>
             </Link>
         {
          user ? <span className='logout' onClick={handleLogout}>Log out  <IoIosLogOut className='logout'/></span> :''
         }
        </div>
    </div>
    <div className="burger">
        <RxHamburgerMenu onClick={handleMenuClick} className='burger' />
        {
          quantity.length ?
          <div className="whiteCircle">{quantity.length}</div>
          : ''
        }
        
       </div>
    {
      openBurger &&
      <div className="burgerMenu">
      <h2 onClick={handleCloseMenu} className='close'>x</h2>
      {
             user ? '' : 'Sign up'
         }
        {
             user ? <p className='regUser'><FaRegUser/>  {user.username}</p> : 'Sign in'
         }
      <span className='bSpan' >Catalog</span>
      <span className='bSpan' >About</span>
      <span className='bSpan' >FAQ</span>
      <Link to = '/cart'>
             <Badge badgeContent={quantity.length}
             color='secondary'
              style={{color:"white"}}>
             <ShoppingCartOutlinedIcon/>Cart</Badge>
             </Link>
     </div>
    }
    </div>
  )
}

export default Header