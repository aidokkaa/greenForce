import React from 'react'
import './register.css';
import { UserData } from '../../redux/registerSlice';
import { useAppDispatch,useAppSelector } from '../../hooks';
import { registerUser } from '../../redux/registerSlice';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
const Register = () => {
  const [showPasswordText, setShowPasswordText] = React.useState(false);
  const dispatch = useAppDispatch();
  const {loading,error}=useAppSelector(state=>state.register);
  const navigate = useNavigate();
  const [userData,setUserData] = React.useState<UserData>({
    username:'',
    lastname:"",
    password:'',
    email:'',
    confirmPassword:''
  })
  const [passwordError,setPassError]=React.useState('') ;
  const [strongPass,setStrongPass]= React.useState('')
  const [containsUserData,setContainsUserData]=React.useState('');
  const [eye,setEye] = React.useState(true)
  const isPasswordStrong = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*]/.test(password);    
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChars
    );
  };
  const containsName =(password,name,lastName)=>{
    return password.includes(name)|| password.includes(lastName)
  }
  const handleChange = (e)=>{
    const {value,name} = e.target;
    setUserData({...userData,[name]:value});
    if(name==='password'){
      setShowPasswordText(true)
    }
  }
  const handleRegister = (e)=>{
    e.preventDefault();
    console.log('registered')
    if(userData.password!==userData.confirmPassword){
      setPassError("Passwords do not match!")
    }else if (!isPasswordStrong(userData.password)) {
      setStrongPass("Password must be at least 8 characters long and include upper case, lower case, numbers, and special characters.")}
     else if(containsName(userData.password, userData.username, userData.lastname)){
      setContainsUserData("Password cannot contain your username or last name.")
     }
    else{
      dispatch(registerUser(userData));
      navigate('/login') 
    }
  };
  const hidePass = ()=>{
    setEye(!eye)
  }
  return (
    <div>
      <div className="containerReg">
         <div className="wrapperReg">
          <h2>Create an Account</h2>
            <form onSubmit={handleRegister} action="">
              <input className='check1' onChange={handleChange} name='username' type="text" placeholder='username'/>
              <input className='check1' onChange={handleChange} name='lastname' type="text" placeholder='last name'/>
              <input className='check1' onChange={handleChange} name='email' type="email"  placeholder='email'/>
              <input className='check1' onChange={handleChange} name='password' type={eye ? "password" :'text'} placeholder='password'/> 
              {showPasswordText && 
              (<span className='pass' onClick={hidePass}>
                {eye? "Show password" :"Hide password"}
              </span>)}
              <p>{strongPass}</p>
              {containsUserData && (
                <p>{containsUserData}</p>
              )}
              <input className='check1' onChange={handleChange} name='confirmPassword' type="password" placeholder='Confirm password'/>
               <div className="btnCheck1">
                 <input  type="checkbox" />
                 <span>By creating an account, I concent 
                  to the processing of my personal data in accordance
                   with the <b>PRIVACY POLICY</b></span> 
               </div>
               <h1>{passwordError}</h1>
               <button type='submit'>
               {loading ? 'Registering' :'Register'}
               </button>
            </form>
         </div>
      </div>
    </div>
  )
};

export default Register