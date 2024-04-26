<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WeGrow - HealthyPreps</title>
    <link rel="stylesheet" href="wegrow.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
	<link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet"/>
	<link rel="icon" type="image/x-icon" href="imgs\favicon.ico">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-Eq4dvwtsbKbKhPI5koRIzD5SBs3Cj73b/DNFdvtZiNRaE/3yIcuATfRQjY9l+K63XfuD/mCJ5LHnWvfY1MYkAQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

	
</head>
<body class="top-page">
    <nav class="menu-container">
        <!-- burger menu -->
        <input type="checkbox" aria-label="Toggle menu" />
        <span></span>
        <span></span>
        <span></span>
      
        <!-- logo -->
        <a href="#main-content" class="menu-logo">
            <p> We GROW </p>
        </a>
      
        <!-- menu items -->
        <div class="menu">
            <ul>
                <li><a href="#main-content"><i class="fas fa-home"></i> Home</a></li>
                <li><a href="#about"><i class="fas fa-info-circle"></i> About Us</a></li>
                <li><a href="#categ"><i class="fas fa-book-open"></i> Category</a></li>
                <li><a href="#contacts"><i class="fas fa-envelope"></i> Contact</a></li>
                <li><a href="../LOGIN/Login.php"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
            </ul>
        </div>
    </nav>
</body>
				

    
    <main id="main-content">
        
		<div class="intro">
		<?php
                    // Start the session
                    session_start();

                    // Check if username is set in session
                    if(isset($_SESSION['username'])) {
                        // Display the username in the menu
                        echo '<div class="welcoming">Welcome to WE-GROW, ' . $_SESSION['username'] . '</div>';
                    }
                ?>

			<p>Your gateway to healthy recipes! Join us on a journey 
				filled with nutritious and mouthwatering dishes. Let's 
				explore a world of flavors, ingredients, and cooking techniques
				 that will inspire and delight your taste buds.

			</p>

			<button ><a href="#categ"> Enter Culinary World	</a></button>	 
		</div>
    </main>
	<section></section>

    <div class="footer">
        <div id="quote"> 
			
		</div>
		</div>
		
		<section id="categ">
			<h1 class="cat">Category</h1>
		
			<div class="category-container">
				<!-- Food Category -->
				<div class="categories food">
					<h2>Food</h2>
					<div class="image-container">
						<img src="food\1.jpeg" alt="Food Image" class="food-image">
					</div>
					<button class="ctg-button"><a href="food_category.html">MORE RECIPES</a></button>
				</div>
		
				<!-- Dessert Category -->
				<div class="categories dessert">
					<h2>Dessert</h2>
					<div class="image-container">
						<img src="imgs\Greek-Yogurt-Parfait-Recipe.jpg" alt="Dessert Image" class="dessert-image">
					</div>
					<button class="ctg-button"><a href="dessert.html">MORE RECIPES</a></button>
				</div>
		
				<!-- Drinks Category -->
				<div class="categories drinks">
					<h2>Drinks</h2>
					<div class="image-container">
						<img src="imgs\healthy-drinks-for-kids.jpg" alt="Drinks Image" class="drinks-image">
					</div>
					<button class="ctg-button"><a href="others.html">MORE RECIPES</a></button>
				</div>
			</div>
		</section>
		
		
		

		<div id="about">
			<div class="abt-container">
			<img src="imgs\favicon.ico" alt="logo">
			<h2 class="abt-head">About US</h2>
			<div class="aboutus">
				<div class="content">
				  <p>Welcome to We GROW, your hub for delicious, nutritious 
				  recipes and holistic wellness inspiration! We're passionate 
				  about making healthy eating a joyous experience for everyone. 
				  Join our community and discover the power of wholesome food to 
				  nourish your body and soul</p>
				</div>
			  </div>
			<div class="missionvision">
				<div class="content">
				<h2> MISSION </h2>
				<p>At We GROW, we're on a mission to empower individuals to 
				embrace wellness through nourishing food and mindful living.
				 We curate recipes and resources that inspire healthy choices 
				 and foster a sense of community.
				</p>
				</div>
				<div class="content">
				<h2>VISION</h2>
				<P> Our vision at We GROW is to be a catalyst 
					for global wellness, promoting sustainable living 
					and nourishing lifestyles. We envision a world where 
					everyone has access to nutritious food and the tools to 
					thrive, creating a happier, healthier future for generations to come</P>
				</div>
			</div>
		</div>
		</div>
		<section class="team">
			<h3>Our Team</h3>
		<div class="team-members">
			<div class="team-member">
				<img src="imgs\b9c47ef70bff06613d397abfce02c6e7.jpg" alt="Ana Marie">
				<h4>Ana Marie Bombeo</h4>
				<p>Role: Lead Designer</p>
			</div>
			<div class="team-member">
				<img src="imgs\download (2).jpeg" alt="Carl Patrick">
				<h4>Carl Patrick Daguinotas	</h4>
				<p>Role: Lead Designer</p>
			</div>
		</div>
		</section>
		
		
		
		<footer id="contacts">
			<div class="footer-container">
				<div class="info-container">
					<div class="website-info">
						<img src="imgs\favicon.ico" alt="logo">
					</div>
					<div class="social-icons">
						<a href="#" class="icon facebook"><i class="fab fa-facebook-f"></i></a>
						<a href="#" class="icon instagram"><i class="fab fa-instagram"></i></a>
						<a href="#" class="icon twitter"><i class="fab fa-twitter"></i></a>
					</div>
				</div>
				<hr>
				<div class="contact-form">
					
					<h3>Contact Us</h3>
					<form action="carldaguinotas@gmail.com" method="post" enctype="text/plain">
						<label for="name">Name</label><br>
						<input type="text" placeholder="ex. Juan Dela Cruz"   id="name" name="name"><br>
						<label for="email">Email</label><br>
						<input type="email" placeholder="ex. jdelacruz@gmail.com" id="email" name="email"><br>
						<label for="message">Message</label><br>
						<textarea id="message" name="message" rows="4"></textarea><br>
						<input type="submit" value="Send">
					</form>
				</div>
				
			</div>
			
		</footer>
		

			<section> </section>
	
	
		<script src="script.js" defer></script>

</body>
</html>
