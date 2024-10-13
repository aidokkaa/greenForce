import React from 'react';
import './faq.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const FAQ = ({faqRef}) => {
    const [openHeight,setOpenHeight]=React.useState(false);
    const [openHeight1,setOpenHeight1]=React.useState(false);
    const [openHeight4,setOpenHeight4]=React.useState(false);
    const [openHeight3,setOpenHeight3]=React.useState(false);
    const openWindow =()=>{
        setOpenHeight(!openHeight)
    }
    const openWindow1 =()=>{
        setOpenHeight1(!openHeight1)
    }
    const openWindow3 =()=>{
        setOpenHeight3(!openHeight3)
    }
  return (
   <div ref={faqRef} className='section container sectionF'>
    <div className="faqs">
    <div className="faqLeft">
    <h1 className="faq-title">
      {['F', 'A', 'Q'].map((letter, index) => (
        <span key={index} className="letter">
          {letter}
          <span className="flower-animation" />
        </span>
      ))}
    </h1>
    </div>
    <div className="faqRight">
    <div className="faqItem">
            <div className="question">
            <h3 className='qText'>How do you grow microgreens at home?</h3>
            {openHeight ?
              <IoIosArrowUp className='iconFaq' onClick={openWindow}/> :
              <IoIosArrowDown className='iconFaq' onClick={openWindow}/>
            }
            </div>
            <div className={`answer ${openHeight ? 'open' : ''}`}>
          <p className='pText'>Growing microgreens is quite simple. You need seeds, soil, a container, and some light.They are usually ready to harvest in 7-14 days.</p>
        </div>
         </div>
         <div className="faqItem">
            <div className="question">
            <h3 className='qText'>How can you use microgreens in cooking?</h3>
            {openHeight1 ?
              <IoIosArrowUp className='iconFaq' onClick={openWindow1}/> :
              <IoIosArrowDown className='iconFaq' onClick={openWindow1}/>
            }
            </div>
            <div className={`answer ${openHeight1 ? 'open' : ''}`}>
            <p className = 'pText'> Microgreens can be added to salads, sandwiches, smoothies, or used as a garnish for main dishes. They enhance any meal with their fresh taste.</p>
            </div>
        
         </div>
         <div className="faqItem">
            <div className="question">
            <p className='qText'>Are microgreens safe for children and pregnant women?</p>
            {openHeight3 ?
              <IoIosArrowUp className='iconFaq' onClick={openWindow3}/> :
              <IoIosArrowDown className='iconFaq' onClick={openWindow3}/>
            }
            </div>
            <div className={`answer ${openHeight3 ? 'open' : ''}`}>
            <p className = 'pText'>Yes, microgreens are safe for most people. However, as with any food, it's important to wash them thoroughly.</p>
            </div>
         </div>
    </div>
    </div>
   </div>
  );
};

export default FAQ;