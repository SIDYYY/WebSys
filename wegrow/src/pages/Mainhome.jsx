import React from 'react';
import '../styles/wegrow.css';
import image from '../imgs/jason-briscoe-n4ymhyyFY7A-unsplash.jpg';

function Home() {
  return (
    <main id="main-content" className="main-content ">
      <div className="intro-grid ">
        <div className="intro-text reveal disappear">
          <h1>Welcome to We-GROW</h1>
          <p>Healthy / Cravings / Satisfaction</p>
		  <button class="contact-btn" id='ctg'><a href="#about"> Know more 'ABOUT US'	</a></button>
        </div>
        <div className="intro-image reveal disappear">
          <img src={image} alt="Healthy food" />
        </div>
		
      </div>
    </main>
  );
}

export default Home;
