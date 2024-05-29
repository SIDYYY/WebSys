import React from 'react';
import '../styles/wegrow.css'
import image from '../imgs/jason-briscoe-n4ymhyyFY7A-unsplash.webp';

function Home() {
  return (
    <main id="main-content" className="main-content ">
      <div className="intro-grid ">
        <div className="intro-text reveal disappear">
          <h1>GGG || We-GROW</h1>
          <p>Healthy / Cravings / Satisfaction</p>
		  <button class="contact-btn" id='abt'><a href="#abouts"> Know more 'ABOUT US'	</a></button>
        </div>
        <div className="intro-image reveal disappear">
          <img src={image} alt="Healthy food" />
        </div>
		
      </div>
    </main>
  );
}

export default Home;
