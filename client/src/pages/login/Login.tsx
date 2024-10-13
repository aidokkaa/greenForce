import React from 'react'
import { Link} from 'react-router-dom'
import './login.css';
import { useAppDispatch } from '../../hooks';
import { login } from '../../redux/apiCalls';
import { useAppSelector } from '../../hooks';
const Login = () => {
  const [username,setUsername] = React.useState('');
  const[password,setPassword]=React.useState('');
  const dispatch = useAppDispatch();
  const {isFetching,error}=useAppSelector(state=>state.user)
  const currentuser = useAppSelector(state=>state.user.currentUser);
  const handleClick = (e)=>{
    e.preventDefault();
    console.log(currentuser)
    login(dispatch, { username, password })
  }
  return (
    <div>
      <div className="containerReg">
         <div className="wrapperReg">
          <h2>Sign in</h2>
            <form action="">
              <input onChange={(e)=>setUsername(e.target.value)} className='checkLogin' type="text" placeholder='username'/>
              <input onChange={(e)=>setPassword(e.target.value)}  className='checkLogin' type="password" placeholder='password'/>
               <button disabled= {isFetching} onClick={handleClick}>Login</button>
               {error && (
                <div style={{color:"red"}}>Something went wrong...</div>
               )}
               <p>
               Don't have an account?</p>
               <Link to ='/register'>Create a new account</Link>
            </form>
         </div>
      </div>
    </div>
  )
}

export default Login