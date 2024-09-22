import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaFire, FaHome,  FaClock,FaGlassCheers, FaIceCream, FaTimes } from 'react-icons/fa';
import '../styles/food.css'; 
import n1card from '../imgs/EatingWell-April-Avocado-Toast-Beauty-Angle-1x1-5dbdcb43cc6a43d588a620fdb9a42bf4.webp';
import n2card from '../imgs/spinach-salad.webp';
import n3card from '../imgs/263217-BakedSalmonInFoil-MFS-MFS-2X3-0269-03a69c31414f46c882dc7d9b8f46534c.webp';
import n4card from '../imgs/best-quinoa-salad-recipe-3.webp';
import n5card from '../imgs/Stuffed-Bell-Peppers-f.webp';
import n6card from '../imgs/grilled-chicken-with-mango-avocado-salsa-3-SQUARE.webp';


  const recipes = [
    {
      id: 1,
      title: "Avocado Toast",
      image: n1card,
      description: "Creamy mashed avocado on toasted bread.",
      prepTime: "10 minutes",
      calories: "250 calories",
      ingredients: [
        "1 ripe avocado",
        "2 slices whole grain bread",
        "1 tablespoon lemon juice",
        "Salt and pepper to taste",
        "Optional toppings: cherry tomatoes, red pepper flakes, sliced radishes, etc."
      ],
      procedure: [
        "Toast the slices of whole grain bread until golden brown.",
        "While the bread is toasting, scoop out the flesh of the avocado into a bowl and mash it with a fork.",
        "Add lemon juice, salt, and pepper to the mashed avocado and mix well.",
        "Spread the mashed avocado evenly on the toasted bread slices.",
        "Top with your favorite optional toppings if desired.",
        "Serve immediately and enjoy!"
      ]
    },
    {
      id: 2,
      title: "Spinach Salad",
      image: n2card,
      description: "Fresh spinach leaves with toppings ",
      prepTime: "15 minutes",
      calories: "200 calories",
      ingredients: [
        "Baby spinach leaves",
        "Cherry tomatoes, halved",
        "Cucumber, sliced",
        "Red onion, thinly sliced",
        "Feta cheese, crumbled",
        "Balsamic vinegar",
        "Olive oil",
        "Salt and pepper"
      ],
      procedure: [
        "In a large salad bowl, combine baby spinach leaves, cherry tomatoes, cucumber slices, red onion slices, and crumbled feta cheese.",
        "In a small bowl, whisk together balsamic vinegar, olive oil, salt, and pepper to make the dressing.",
        "Drizzle the dressing over the salad and toss to coat evenly.",
        "Serve immediately as a nutritious and flavorful salad."
      ]
    },
    {
      id: 3,
      title: "Baked Salmon",
      image: n3card,
      description: "Seasoned salmon fillets baked ",
      prepTime: "20 minutes",
      calories: "300 calories",
      ingredients: [
        "Salmon fillets",
        "Lemon slices",
        "Fresh herbs (such as dill, parsley, or thyme)",
        "Olive oil",
        "Salt and pepper"
      ],
      procedure: [
        "Preheat the oven to 375°F (190°C).",
        "Place salmon fillets on a baking sheet lined with parchment paper.",
        "Drizzle olive oil over the salmon fillets and season with salt and pepper.",
        "Place lemon slices and fresh herbs on top of each salmon fillet.",
        "Bake in the preheated oven for 12-15 minutes or until the salmon is cooked through and flakes easily with a fork.",
        "Serve immediately with your favorite side dishes for a healthy and delicious meal."
      ]
    },
    {
      id: 4,
      title: "Quinoa Salad",
      image: n4card,
      description: "Nutritious salad made with quinoa, vegetables, and a zesty dressing.",
      prepTime: "25 minutes",
      calories: "220 calories",
      ingredients: [
        "1 cup quinoa, rinsed",
        "2 cups water or vegetable broth",
        "1 cup cherry tomatoes, halved",
        "1 cucumber, diced",
        "1 bell pepper, diced",
        "1/4 cup red onion, finely chopped",
        "1/4 cup fresh parsley, chopped",
        "1/4 cup olive oil",
        "2 tablespoons lemon juice",
        "2 cloves garlic, minced",
        "Salt and pepper to taste"
      ],
      procedure: [
        "In a medium saucepan, bring the water or vegetable broth to a boil. Add the quinoa, reduce heat to low, cover, and simmer for 15-20 minutes or until the quinoa is cooked and the liquid is absorbed. Remove from heat and let it cool.",
        "In a large bowl, combine the cooked quinoa, cherry tomatoes, cucumber, bell pepper, red onion, and parsley.",
        "In a small bowl, whisk together the olive oil, lemon juice, garlic, salt, and pepper to make the dressing.",
        "Pour the dressing over the quinoa salad and toss to coat evenly.",
        "Serve chilled or at room temperature as a healthy and satisfying meal."
      ]
    },
    {
      id: 5,
      title: "Stuffed Bell Peppers",
      image: n5card,
      description: "Colorful bell peppers filled with a savory mixture of quinoa, black beans, corn, and spices.",
      prepTime: "35 minutes",
      calories: "280 calories",
      ingredients: [
        "4 large bell peppers, any color",
        "1 cup cooked quinoa",
        "1 cup black beans, drained and rinsed",
        "1 cup corn kernels",
        "1 cup diced tomatoes",
        "1/2 cup diced onion",
        "2 cloves garlic, minced",
        "1 teaspoon ground cumin",
        "1 teaspoon chili powder",
        "1/2 teaspoon smoked paprika",
        "Salt and pepper to taste",
        "1/2 cup shredded cheese (optional)",
        "Fresh cilantro, chopped, for garnish"
      ],
      procedure: [
        "Preheat the oven to 375°F (190°C).",
        "Cut the tops off the bell peppers and remove the seeds and membranes from inside.",
        "In a large bowl, combine the cooked quinoa, black beans, corn, diced tomatoes, onion, garlic, cumin, chili powder, smoked paprika, salt, and pepper.",
        "Spoon the quinoa mixture into the bell peppers, pressing down gently to pack the filling.",
        "If using cheese, sprinkle it over the tops of the stuffed peppers.",
        "Place the stuffed peppers in a baking dish, cover with foil, and bake for 25-30 minutes or until the peppers are tender.",
        "Remove the foil and bake for an additional 5-10 minutes or until the cheese is melted and bubbly.",
        "Garnish with fresh cilantro before serving."
      ]
    },
    {
      id: 6,
      title: "Mango Salsa Chicken",
      image: n6card,
      description: "Grilled chicken breasts topped with a refreshing mango salsa.",
      prepTime: "20 minutes",
      calories: "320 calories",
      ingredients: [
        "4 boneless, skinless chicken breasts",
        "1 ripe mango, peeled and diced",
        "1/2 cup diced red bell pepper",
        "1/4 cup diced red onion",
        "1/4 cup chopped fresh cilantro",
        "1 jalapeño pepper, seeded and minced",
        "Juice of 1 lime",
        "Salt and pepper to taste"
      ],
      procedure: [
        "Preheat the grill to medium-high heat.",
        "Season the chicken breasts with salt and pepper.",
        "Grill the chicken breasts for 6-7 minutes per side or until cooked through and no longer pink in the center.",
        "While the chicken is grilling, prepare the mango salsa. In a medium bowl, combine the diced mango, red bell pepper, red onion, cilantro, jalapeño pepper, lime juice, salt, and pepper. Mix well.",
        "Remove the chicken breasts from the grill and let them rest for a few minutes.",
        "Top each chicken breast with a generous spoonful of mango salsa.",
        "Serve immediately with your favorite side dishes for a delicious and healthy meal."
      ]
    }
    
    
    
  ];
  
  const FoodCategory = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
  
    const handleRecipeClick = (recipe) => {
      setSelectedRecipe(recipe);
    };
  
    const handleClose = () => {
      setSelectedRecipe(null);
    };
  
    return (
      <div className="holder">
        <section className="section__container category__container">
          <p className="section__subheader">
            WE GROW <span><i className="ri-leaf-fill"></i></span>
          </p>
          <h2 className="section__header">Food Category</h2>
          <nav className='category__list-holder'>
          <ul className="category__list">
            <li><Link to="/bombeo-daguinotas"><FaHome className='li1' />Home</Link></li>
            <li><Link to="/dessert"><FaIceCream className='li2' />Dessert</Link></li>
            <li><Link to="/drinks"><FaGlassCheers className='li3' />Drink</Link></li>
          </ul>
          </nav>
          <div className="recipe-grid">
            {recipes.map(recipe => (
              <div key={recipe.id} className="recipe-card" onClick={() => handleRecipeClick(recipe)}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} />
                <p className="description">{recipe.description}</p>
              </div>
            ))}
          </div>
        </section>
        {selectedRecipe && (
          <div className="recipe-details">
            <div className="recipe-content">
              <button className="close-btn" onClick={handleClose}><FaTimes/></button>
              <h3>{selectedRecipe.title}</h3>
              <img src={selectedRecipe.image} alt={selectedRecipe.title} />
              <div className="prep-cal">
            <div className="prep-time">
              <FaClock /> <span>Prep time: {selectedRecipe.prepTime}</span>
            </div>
            <div className='cal-count'>
            <FaFire /> <span> Calorie Count : {selectedRecipe.calories}</span>  
            </div>
            </div>
            <div className="rep-hold">
              <h4>Ingredients</h4>
              <ol>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ol>
              <h4>Procedure</h4>
              <ol>
                {selectedRecipe.procedure.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };  
export default FoodCategory;
