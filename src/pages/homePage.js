import React from 'react';


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
