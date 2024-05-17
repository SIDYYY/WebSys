import React from 'react';
import '../styles/wegrow.css'

function Home() {
  return (
    
<main id="main-content" className='main-content'>
        
		<div className="intro">
            <h2> Welcome to We-GROW </h2>

			<p>Your gateway to healthy recipes! Join us on a journey 
				filled with nutritious and mouthwatering dishes. Let's 
				explore a world of flavors, ingredients, and cooking techniques
				 that will inspire and delight your taste buds.

			</p>
			
			<div className="nav-btn">
			<button id='abt'><a href="#about"> Learn more About US	</a></button>
			</div>
		</div>
		
    </main>

  );
}

export default Home;