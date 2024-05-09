import React from 'react';
import resizingimage from '../imgs/spinach-salad.jpg';
import '../styles/wegrow.css'
import Ana from '../imgs/b9c47ef70bff06613d397abfce02c6e7.jpg'
import Carl from '../imgs/download (2).jpeg'


function Team() {
  return (
    <section class="team">
			<h3>Our Team</h3>
		<div class="team-members">
			<div class="team-member">
				<img src={Ana} alt="Ana Marie"/>
				<h4>Ana Marie Bombeo</h4>
				<p>Role: Lead Designer</p>
				<p>Email: anaboms@gmail.com</p>
    			<p>Phone: 099-999-9999</p>
			</div>
			<div class="team-member">
				<img src={Carl} alt="Carl Patrick"/>
				<h4>Carl Patrick Daguinotas	</h4>
				<p>Role: Lead Designer</p>
				<p>Email: carldags@gmail.com</p>
    			<p>Phone: 099-999-9999</p>
			</div>
		</div>
		</section>
  );
}


export default Team;