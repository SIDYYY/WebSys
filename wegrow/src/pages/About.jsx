import React from 'react';
import resizingimage from '../imgs/spinach-salad.jpg';
import '../styles/wegrow.css'

function About() {
  return (
    <div id="abouts">
		
      <div className="abt-holder ">
        
        <div className="hug">
        <div className="abt-head">
          <h1 >About || We-GROW</h1>
        </div>
        <div className="abt-welcome reveal disappear">
          <h2>Welcome to We-GROW</h2>
          <p>
            Your hub for delicious, nutritious recipes and holistic wellness inspiration! We're passionate about making healthy eating a joyous experience for everyone.
            Join our community and discover the power of wholesome food to nourish your body and soul.
          </p>
        </div>
        <div className="abt-mission reveal disappear">
          <h2>Our Mission</h2>
          <p>
            At We GROW, we're on a mission to empower individuals to embrace wellness through nourishing food and mindful living.
            We curate recipes and resources that inspire healthy choices and foster a sense of community.
          </p>
        </div>
      </div>
      </div>
      <div className="img-holder reveal">
        <img src={resizingimage} alt="We-GROW" />
      </div>
    
    </div>
  );
}

export default About;