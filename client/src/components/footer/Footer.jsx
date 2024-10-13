import React from 'react'
import './footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {

return (
    <div className='footer'>
        <div className="footerInner">
            <div className="logoF" style={{color:'gray'}}>GreenForcce</div>
           <div className="info">    
             <div className="company">
                <p>Our company</p>
                <p>Catalog</p>
                <p>Policy</p>
            </div>
            <div className="contact">
                <div className="call">
                    <p>
                    Request a call:</p>
                    <p><FaPhoneAlt/>  678-645-66-17</p>
            </div>
            <div className="email">
                <p>
                Write to us</p>
                <p><MdEmail/>  info@gmail.com</p>
            </div>
                
            </div></div>
        </div>
    </div>
  )
}

export default Footer