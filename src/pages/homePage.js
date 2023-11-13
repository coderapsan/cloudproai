import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./partnershippage.css";

import partnership1 from '../assets/images/1.jpg';
import partnership2 from '../assets/images/2.jpg';
import partnership3 from '../assets/images/4.jpg';



function HomePage() {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Cloud Pro AI</h1>
          <p>Your Trusted Partner for AI, ML, and Cloud Solutions</p>
          <a href="/about" className="cta-button">Learn More</a>
        </div>
      </header>

      <section className="services-section">
        <div className="container">
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
          <h2>Our Services</h2>
          <div className="services">
            <div className="service">
              <i className="fas fa-cloud"></i>
              <h3>Cloud Solutions</h3>
              <p>Optimize your business with cloud-based solutions.</p>
            </div>
            <div className="service">
              <i className="fas fa-cogs"></i>
              <h3>AI & ML</h3>
              <p>Unlock the power of AI and Machine Learning.</p>
            </div>
            <div className="service">
              <i className="fas fa-chart-bar"></i>
              <h3>Business Intelligence</h3>
              <p>Make data-driven decisions with BI solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
