import React from 'react';
import resizingimage from '../imgs/spinach-salad.jpg';
import '../styles/wegrow.css'


function About() {
  return (
    <div id="about" className='section'>
			<div class="abt-container">
				<div class="holder reveal">
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
				<div className="btn-container">
				<button class="contact-btn" id='ctc'><a href="#contact"> CONTACT US </a></button>
				<button class="contact-btn" id='tab-desk-ctg'><a href="#categ">  Explore our Recipes	</a></button>
				<button class="contact-btn" id='mobile-ctg'><a href="#categ">  Our Recipes	</a></button>

				</div>
				</div>	
				</div>
				<div class="img-holder">
					<img src={resizingimage} alt="pic" class="changing-img"/>
				</div>
			</div>
		</div>
		</div>
  );
}


export default About;