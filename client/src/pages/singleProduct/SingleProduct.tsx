import React from 'react'
import './singleProduct.css'
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethods';
import {Cartproduct,addProduct } from '../../redux/cartReduxSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Goods } from '../../redux/cartReduxSlice';
import Comments from '../../components/comments/Comments';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleProduct = () => {
    const [product,setProduct]=React.useState<Goods>({
        _id: '',
        title: '',
        desc: '',
        img1: '',
        img2: '',
        img3: '',
        price1:0,
        price2:0,
        price3:0,
        price4:0,
    });
    console.log(product)
    const[quantity,setQuantity]=React.useState<number>(1);
    const[selectedsize,setSelectedsize]=React.useState('');
    const [selected,setSelected] = React.useState(0);
    const[prodPrice,setProdPrice]=React.useState(22);
    const priceRef = React.useRef(null)
    const str = `${product.img1} ${product.img2} ${product.img3}`;
    const imgsArray = str.split(' ');
    const location = useLocation();
    const id=location.pathname.split('/')[2];
    const dispatch = useAppDispatch();
    const userId = useAppSelector(state=>state.user.currentUser._id);
    const token =useAppSelector(state=>state.user.currentUser?.accessToken)
    React.useEffect(()=>{
        console.log("selectedsize"+selectedsize)
        if(selectedsize==='5'){
         setProdPrice(product.price1);
         console.log('prodprice'+prodPrice)
        }
        if(selectedsize==='15'){
            setProdPrice(product.price2);
            console.log('prodprice'+prodPrice)
        };
        if(selectedsize==='20'){
            setProdPrice(product.price3);
            console.log('prodprice'+prodPrice)
        };
        if(selectedsize==='50'){
            setProdPrice(product.price4)
            console.log('prodprice'+prodPrice)
        }
    },[selectedsize,prodPrice])
    React.useEffect(()=>{
        const getProduct = async()=>{
            try{
                const res = await publicRequest.get("/products/find/"+id);
                console.log(res.data)
                setProduct(res.data)
            }
            catch(err){
             console.log(err)
            }
        }
        getProduct()
    },[id]);
    
    const clickChangeSize=(e)=>{
        const value = e.target.value;
        setSelectedsize(value);
      }
    const handleClick=(type)=>{
        if(type==='dec'){
           quantity>0 && setQuantity(quantity-1)
        }else {
            setQuantity(quantity+1)
        }
    }
    const addToCart = async () => {
        if (!selectedsize) {
            alert("Please select a size!"); 
            return;
        }    
        const productData: Cartproduct = { product, quantity, price: prodPrice, selectedsize, userId };
        console.log(productData.product)
        try {
            if(!token){
                throw new Error("User is not authenticated!")
               }
               const response = await publicRequest.post('/carts',productData,{
                headers:{
                    Authorization: `Bearer ${token}`,
                },
               });
               console.log(response.data)
            dispatch(addProduct(productData));
           toast('Successfully added!')
        } catch (error) {
            console.error("Error when adding item to cart", error);
        }
    };
    
  return (
    <div>
        <Header></Header>
        <div className="wrapper">
            <div className="imgCont">
                <div className="images">
                  <img src={imgsArray[0]} alt="" onClick={()=>setSelected(0)}  />
                  <img src={imgsArray[1]} alt="" onClick={()=>setSelected(1)} />
                  <img src={imgsArray[2]} alt="" onClick={()=>setSelected(2)} />
                </div>
                <div className="mainImg">
                    <img src={imgsArray[selected]} alt="" />
                </div>
            </div>
            <div className="infoCont">
                <h2>{product.title}</h2>
                <p style={{margin:'30px 0',fontWeight:"500"}}>About this product:</p>
                <p className='desc'>{product.desc}</p>
             <div className="buttons">
                <div style={{backgroundColor:"#83b81d"}}onClick={()=>{handleClick('dec')}} className="decrease">-</div>
                <span>{quantity}</span>
                <div  style={{backgroundColor:"#83b81d"}}onClick={()=>{handleClick('inc')}} className="increase">+</div>
             </div>
             <span className='price'>${prodPrice}</span>
             <div className="select">
                <select className='selSize' ref={priceRef} onChange={clickChangeSize} name="size" id="">
                    <option value="Select a size">Select a size</option>
                    <option value='5'>5ml</option>
                    <option value='15'>15ml</option>
                    <option value='20'>20ml</option>
                    <option value='50'>50ml</option>
                </select>
             </div>
             <div onClick={addToCart} className="addCart">
                Add to Cart
             </div>
             <ToastContainer
               position="top-right"
               autoClose={4000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover />
            </div>
        </div>
        <hr className='container'/>
       <Comments productId = {id}/>
       <Footer></Footer>
    </div>
  )
}

export default SingleProduct