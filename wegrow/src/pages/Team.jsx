import React from 'react';
import '../styles/wegrow.css'
import Ana from '../imgs/b9c47ef70bff06613d397abfce02c6e7.jpg'
import Carl from '../imgs/download (2).jpeg'


function Team() {
  return (
    <section class="team " id='contact'>
		<div className="tm">
			<h3 className='reveal disappear'>WG - Contact || Team</h3>
		</div>
		<div class="team-members">
		<div class="team-member reveal disappear">
				<img src={Carl} alt="Carl Patrick"/>
				<h4>Carl Patrick Daguinotas	</h4>
				<p>Role: Lead Designer</p>
				<p>daguinotas.carl22@gmail.com</p>
    			<p>(+63) 936-803-7498</p>
			</div>
			<div class="team-member reveal disappear">
				<img src={Ana} alt="Ana Marie"/>
				<h4>Ana Marie Bombeo</h4>
				<p>Role: Lead Designer</p>
				<p>bombeoanamarie25@gmail.com</p>
    			<p>(+63) 906-252-2623</p>
			</div>
		</div>
		</section>
  );
}


export default Team;