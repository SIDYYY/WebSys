import React from 'react';
import resizingimage from '../imgs/spinach-salad.jpg';
import '../styles/wegrow.css'


function About() {
  return (
    <div id="about">
			<div class="abt-container">
				<div class="holder">
			<div class="aboutus">
			
				<div class="content">
				<h2 >About US</h2>
				<p>Welcome to We GROW, your hub for delicious, nutritious recipes and holistic wellness inspiration! We're passionate about making healthy eating a joyous experience for everyone. Join our community and discover the power of wholesome food to nourish your body and soul.</p>
				<h2>Who Are We?</h2>
				<p>We are a team of health enthusiasts dedicated to promoting healthy eating and living.</p>
				<h2> OUR MISSION </h2>
				<p>At We GROW, we're on a mission to empower individuals to 
				embrace wellness through nourishing food and mindful living.
				 We curate recipes and resources that inspire healthy choices 
				 and foster a sense of community.
				</p>
				<button class="contact-btn"><a href="#contacts"> CONTACT US </a></button>
				</div>	
				</div>
				<div class="img-holder">
					<img src={resizingimage} alt="image" class="changing-img"/>
				</div>
			</div>
		</div>
		</div>
  );
}


export default About;