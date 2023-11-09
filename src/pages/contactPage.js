import React from "react";
import "./contactpage.css";

function ContactPage() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>You are here: Home  Contact</p>

      <div className="contact-info">
        <h3>Call us</h3>
        <p>+1 415-393-2021</p>

        <h3>Email</h3>
        <p>contact@cloudproai.com</p>

        <h3>Location</h3>
        <p>584 Castro St #2165, San Francisco, CA 94114-2512</p>
      </div>

      <div className="social-media">
        <h3>Find us on social media</h3>
        <p>Questions? Send us a message!</p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input type="text" id="topic" name="topic" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" name="agree" /> By using this form you agree with the storage and handling of your data by Cloud Pro AI.
          </label>
        </div>

        <button type="submit">SEND MESSAGE</button>
      </form>
    </div>
  );
}

export default ContactPage;
