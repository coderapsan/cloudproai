import React from 'react';
import { Carousel } from 'antd';

const CarouselFrame = () => {
  return (
    <div>
      
        <div className="carousel-slide">
          <img src={require('./Images/1.jpg')} alt="Image 1" />
        </div>
        <div className="carousel-slide">
          <img src={require('./Images/2.jpg')} alt="Image 2" />
        </div>
        {/* Add more slides for other images */}
        <div className="carousel-slide">
          <img src={require('./Images/4.jpg')} alt="Image 4" />
        </div>
        <div className="carousel-slide">
          <img src={require('./Images/5.jpg')} alt="Image 5" />
        </div>
        <div className="carousel-slide">
          <img src={require('./Images/6.jpg')} alt="Image 6" />
        </div>
     
    </div>
  );
};

export default CarouselFrame;
