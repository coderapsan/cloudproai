import React from 'react';
// import { Carousel } from 'antd';
import images1 from '../assets/images/1.jpg'
import images2 from '../assets/images/2.jpg'

const Carousel = () => {
  return (
    <div>
      
        <div className="carousel-slide">
          <img src={images1} alt="Image 1" />
        </div>
        <div className="carousel-slide">
          <img src={images2} alt="Image 2" />
        </div>
        {/* Add more slides for other images */}
        <div className="carousel-slide">
          <img src={images1} alt="Image 4" />
        </div>
        <div className="carousel-slide">
          <img src={images1} alt="Image 5" />
        </div>
        <div className="carousel-slide">
          <img src={images1} alt="Image 6" />
        </div>
     
    </div>
  );
};

export default Carousel;
