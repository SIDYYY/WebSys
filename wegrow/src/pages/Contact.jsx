import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/wegrow.css'


function Contact() {
  return (
      <footer id="contacts" className='section'>
        <div className="footer-container ">
          <div className="contact-us">
            <h3>Contact Us</h3>
            <p>Email: wegrow@gmail.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: USTP CDO - CITC Department</p>
          </div>
          <div className="social-media">
            <h3 className="sm">Follow Us</h3>
            <ul>
              <li><a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebookF /></a></li>
              <li><a href="https://www.twitter.com/" aria-label="Twitter"><FaTwitter /></a></li>
              <li><a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a></li>
              <li><a href="https://www.linkedin.com/" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
      </footer>
  );
}


export default Contact;