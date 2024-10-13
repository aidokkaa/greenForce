import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

const PayErr = () => {
  return (
    <div>
        <h2 style={{margin:"50px auto",textAlign:'center',color:"green"}} >Something went wrong...</h2>
        <Link className='back' to ='/'> <IoMdArrowBack className='backI'/>Back to shopping</Link>
    </div>
  )
}

export default PayErr