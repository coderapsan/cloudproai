import React from 'react';
import image1 from '../assets/images/1.jpg'
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                <img src={image1} alt="Image 6" />
                    <p>Cloud Pro AI</p>
                </div>
                <div class="footer-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: contact@cloudproai.com </p>
                    <p>Phone: +1 415-393-2021</p>
                    <p> Location : 584 Castro St #2165, San Francisco, CA 94114-2512
</p>
                </div>
            </div>
        </div>
    </footer>

    </div>
  )
}

export default Footer
