import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Info */}
        <div className="footer-about">
          <h3 className="footer-title">E-Comm</h3>
          <p className="footer-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <p>
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>E-Comm, 4578</p>
          <p>Marmora Road,</p>
          <p>Glasgow D04 89GR</p>
        </div>

        {/* Links Sections */}
        <div className="footer-links">
          <h4>Information</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Service</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>My Account</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Our Offers</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 E-comm. Theme by reactdeveloper.com</p>
        <div className="payment-icons">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          <img src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-classic-card-498x280.png" alt="MasterCard" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
