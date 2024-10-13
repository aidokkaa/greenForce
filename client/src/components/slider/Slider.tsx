import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import './slider.css';

const AutoSlider = () => {
  const slides = [
    {
      img: 'https://media.vprok.ru/products/x700/e5/ee/7vbxm6g2ppdumurknltj2zkiwyeceee5.jpeg',
      title: 'Microgreens for health - start losing weight today!'
    },
    {
      img: 'https://bevegan.ae/cdn/shop/files/HPL_HERHEAENLPKTL1_20210819112234_1000x.jpg?v=1721639941',
      title: 'Try microgreens - 20% off your first order!'
    },
    {
      img: 'https://www.allthatgrows.in/cdn/shop/products/pak-choi.jpg?v=1598074400',
      title: 'Exclusive varieties of microgreens - try it now!'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className='container section-padding' >
      <div className='slide1'>
      <div className="slides">
      <div className="slideLeft">
      <h2>{slides[currentSlide].title}</h2>
      </div>
      <div className="slideRight">
      <img src={slides[currentSlide].img} alt={slides[currentSlide].title}/>
      </div>
      </div> 
      </div>
      <div>
       <div className="dots">
       {slides.map((slide, index) => (
          <span className='dots'
            key={index}
            style={{
              cursor: 'pointer',
              padding: '5px',
              fontSize:"20px",
              fontWeight: currentSlide === index ? 'bold' : 'normal',
              color:"green"
            }}
            onClick={() => setCurrentSlide(index)}
          >
             {currentSlide === index ? '●' : '○'} 
          </span>
        ))}
       </div>
      </div>
      <div className='btnLeft' onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
        <FaArrowLeft />
      </div>
      <div className='btnRight' onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default AutoSlider;