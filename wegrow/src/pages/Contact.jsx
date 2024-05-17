import React from 'react';
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
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
          {/*<div className="contact-form">
            <h3 className="contact-form-header">Send Us a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>*/}
        </div>
      </footer>
  );
}


export default Contact;