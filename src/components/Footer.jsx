// Footer.jsx
import React from "react";
import "../cssfiles/Footer.css";
import { FaPhoneAlt, FaWhatsapp, FaRegClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Home Maid Services</h2>
          <form>
            <input
              type="email"
              placeholder="Your email address"
              className="email-input"
            />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="footer-section">
          <h3>Timings</h3>
          <p>
            <FaRegClock /> Monday - Sunday (09:00 AM - 09:00 PM)
          </p>
          <a href="tel:08062208322" className="call-now">
            Call Now: XXXXXXXXXX
          </a>
        </div>

        <div className="footer-section">
          <h3>Contacts</h3>
          <p>
            <FaPhoneAlt /> XXXXXXXXXX
          </p>
          <p>
            <FaWhatsapp /> +91 XXXXXXXXXX
          </p>
          <p>
            <FaPhoneAlt /> XXXXXXXXXX
          </p>
        </div>

        <div className="footer-section">
          <h3>Location</h3>
          <p>
            XXXX,XXXX, XXXXXX, XXXX, XXXX,
            XXXXX, India
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          This Website is owned and managed by <b>MaidEase</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
