import React, { useState, useEffect } from 'react';  
import { useNavigate } from 'react-router-dom'; 
import './style.css'; 
  
const IntroContent = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  
  const images = [  
    '/assets/images/lunbotu1.png',  
    '/assets/images/lunbotu2.png',  
    '/assets/images/lunbotu3.png',  
  ];
  const description = [
    ["Realize Your Imagination!", "Design and Sell T-shirts and products with AI"],
    ["Unleash Your Creativity!", "Create and Market T-shirts with AI"],
    ["Empower Your Vision!", "Design and Sell T-shirts using AI Technology"],
  ];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/main');
  };
  useEffect(() => {  
    const nextSlide = () => {  
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);  
    };  
    const timer = setInterval(nextSlide, 3000);  
    return () => clearInterval(timer);  
  }, [currentIndex]);  

  const array = [1, 1, 1];
  return (  
    <div>
      <div className="carousel-container">  
        {images.map((image, index) => (  
          <img 
            key={index}
            src={image} 
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`} 
          ></img>
        ))}  
      </div>  
      <div className='intro-page-container'>
        <div className='image-container'>
          <img src="/assets/images/kurageBW.png"  className='title-icon'></img>
        </div>
        <div className='descriptions-container'>
          {
            description.map((element, outerIndex) => (
              element.map((sentence, innerIndex) => (
                <p 
                  key={outerIndex*10 + innerIndex}
                  className={`carousel-description ${outerIndex === currentIndex ? 'active' : ''}`} 
                >
                  {sentence}
                </p>
              )
            )))}
        </div>
        <div className='footer-container'>
          <div className='button-container'>
            <button onClick={handleClick} className='button-create-now'>Create Now</button>
          </div>
          <div className="circles-container">  
            {array.map((element, index) => (  
              <div 
                key={index}
                className={`carousel-circle ${index === currentIndex ? 'active' : ''}`} 
              ></div>
            ))}  
          </div>
        </div>
      </div>
    </div>
  );  
};  
  
export default IntroContent;