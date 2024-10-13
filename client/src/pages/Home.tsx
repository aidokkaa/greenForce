import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import About from '../components/About'
import { RxHamburgerMenu } from "react-icons/rx";
import ReadPage from '../components/readpage/ReadPage'
import Footer from '../components/footer/Footer'
import Category from '../components/catalog/Category'
import Blogs from '../components/blogs/Blogs'
import { useAppDispatch } from '../hooks';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import Faq from '../components/faq/Faq'
import AutoSlider from '../components/slider/Slider'
import PopularProducts from '../components/popular/Popular'

const Home = () => {
const handleScroll = () => {
  const sections = document.querySelectorAll('.section');
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionElem = section as HTMLElement
    const sectionTop = sectionElem.offsetTop;
    const sectionHeight = sectionElem.offsetHeight;
    if (scrollY + window.innerHeight > sectionTop + sectionHeight / 4) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
};

React.useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
const quantity = useAppSelector(state=>state.cart.products);
const user = useAppSelector(state=>state.user.currentUser);
const [openBurger,setOpenBurger]=React.useState(false)
const navigate = useNavigate();
const dispatch = useAppDispatch()
 const handleLogout=()=>{
     dispatch(logout());
     navigate('/login')
     console.log('llogiu')
   }
   const handleMenuClick = (event) => {
    setOpenBurger(!openBurger)
};
const handleCloseMenu = () => {
  setOpenBurger(!openBurger)
};
const catalogRef = React.useRef(null);
const aboutRef = React.useRef(null);
const faqRef = React.useRef(null);
const scrollToSection = (sectionRef) => {
  sectionRef.current.scrollIntoView({ behavior: 'smooth' });
};
  return (
    <div>
     <div className='header'>
       <div className="logo">
        GreenForce
       </div>
    <div className="divMenu">
    <div className="menu">
    <span onClick={() => scrollToSection(catalogRef)}>Catalog</span>
                    <span onClick={() => scrollToSection(aboutRef)}>About</span>
                    <span onClick={() => scrollToSection(faqRef)}>FAQ</span>
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
    <a onClick ={()=>catalogRef.current?.scrollIntoView({
          behavior:"smooth"
         })} href="#catalog"><span>Catalog</span></a>
          <a onClick ={()=>aboutRef.current?.scrollIntoView({
          behavior:"smooth"
         })} href="#about"><span>About</span></a>
          <a onClick ={()=>faqRef.current?.scrollIntoView({
          behavior:"smooth"
         })} href="#frequently"><span >FAQ</span></a>
      <Link to = '/cart'>
             <Badge badgeContent={quantity.length}
             color='secondary'
              style={{color:"white"}}>
             <ShoppingCartOutlinedIcon/>Cart</Badge>
             </Link>
     </div>
    }
    </div>
        <AutoSlider></AutoSlider>
        <About about = {aboutRef}></About>
        <Category catalogRef = {catalogRef}/>
        <PopularProducts></PopularProducts>
        <ReadPage></ReadPage>
        <Faq faqRef={faqRef}></Faq>
        <Blogs></Blogs>
        <Footer></Footer>
    </div>
  )
}

export default Home
