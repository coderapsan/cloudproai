import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./partnershippage.css";

import partnership1 from '../assets/images/1.jpg';
import partnership2 from '../assets/images/2.jpg';
import partnership3 from '../assets/images/4.jpg';

const PartnershipPage = () => {
  return (
    <div className="partnerships-container">
      <h2>Our Partnerships</h2>
      <Carousel showArrows={true} showStatus={false} showThumbs={false}>
        <div>
          <img src={partnership1} alt="Partnership 1" />
          <p className="legend">Partner 1</p>
        </div>
        <div>
          <img src={partnership2} alt="Partnership 2" />
          <p className="legend">Partner 2</p>
        </div>
        <div>
          <img src={partnership3} alt="Partnership 3" />
          <p className="legend">Partner 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default PartnershipPage;
