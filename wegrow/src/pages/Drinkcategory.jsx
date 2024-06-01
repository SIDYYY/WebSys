import React, { useState } from 'react';
import { FaFire, FaHome, FaUtensils, FaIceCream, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import '../styles/food.css'; 
import n1card from '../imgs/green-smoothie-8-1200-500x500.webp';
import n2card from '../imgs/watermelon-coconut-agua-fresca-featured-pic-sq.webp';
import n3card from '../imgs/Triple-Berry-Smoothie-square-featured.webp';
import n4card from '../imgs/turmeric-ginger-coloda-featured.webp';
import n5card from '../imgs/TropicalCucumberCooler_630x420.webp';
import n6card from '../imgs/turmeric-lemon-ginger-tea-apple-cider-vinegar-vegan-gluten-free-drink-healthy-square.webp';




const recipes = [
  {
    id: 1,
    title: "Green Smoothie",
    image: n1card, 
    description: "Blend spinach, banana, and almond milk. ",
    prepTime: "10-20 minutes",
    calories: "85 calories",
    ingredients: [
      "Handful of spinach",
      "1 ripe banana",
      "1 cup almond milk"
    ],
    procedure: [
      "Wash the spinach thoroughly.",
      "Peel and chop the banana.",
      "In a blender, combine spinach, banana, and almond milk.",
      "Blend until smooth.",
      "Top with your favorite optional toppings if desired.",
      "Serve immediately and enjoy!"
    ]
  },
  {
    id: 2,
    title: "Berry Smoothie",
    image: n2card,
    description: "Combine mixed berries, yogurt, and honey. ",
    prepTime: "10-20 minutes",
    calories: "175 calories",
    ingredients: [
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1/2 cup yogurt (Greek or regular)",
      "1 tablespoon honey (optional)"
    ],
    procedure: [
      "Wash the berries and remove any stems.",
      "In a blender, combine mixed berries, yogurt, and honey.",
      "Blend until smooth.",
      "Taste and adjust sweetness if needed.",
      "Serve chilled."
    ]
  },
  {
    id: 3,
    title: "Watermelon Cooler",
    image: n3card,
    description: "Mix coconut water, watermelon, and lime juice. ",
    prepTime: "10-20 minutes",
    calories: "100 calories",
    ingredients: [
      "1 cup coconut water",
      "2 cups cubed watermelon",
      "Juice of 1 lime"
    ],
    procedure: [
      "Remove the seeds and rind from the watermelon and cut it into cubes.",
      "In a blender, combine coconut water, watermelon cubes, and lime juice.",
      "Blend until smooth.",
      "Strain the mixture if desired to remove any pulp.",
      "Serve over ice and garnish with a lime wedge, if desired."
    ]
  },
  {
    id: 4,
    title: "Turmeric Ginger Tea",
    image: n4card,
    description: "A warm and soothing beverage infused with turmeric and ginger, known for their anti-inflammatory properties.",
    prepTime: "5 minutes",
    calories: "20 calories",
    ingredients: [
      "2 cups water",
      "1 teaspoon ground turmeric",
      "1 teaspoon grated fresh ginger",
      "1 tablespoon honey (optional)",
      "Juice of 1/2 lemon (optional)"
    ],
    procedure: [
      "In a small saucepan, bring water to a boil.",
      "Add ground turmeric and grated ginger to the boiling water.",
      "Reduce heat to low and simmer for 5 minutes.",
      "Strain the tea into mugs, discarding the solids.",
      "Stir in honey and lemon juice if desired.",
      "Serve hot and enjoy the soothing benefits of turmeric ginger tea!"
    ]
  },
  {
    id: 5,
    title: "Cucumber Mint Cooler",
    image: n5card,
    description: "A refreshing drink made with cucumber, mint, and lime, perfect for staying hydrated on hot days.",
    prepTime: "10 minutes",
    calories: "60 calories",
    ingredients: [
      "1 large cucumber, peeled and chopped",
      "Handful of fresh mint leaves",
      "Juice of 2 limes",
      "4 cups cold water",
      "Ice cubes",
      "Honey or agave syrup to taste (optional)"
    ],
    procedure: [
      "In a blender, combine chopped cucumber, mint leaves, lime juice, and cold water.",
      "Blend until smooth.",
      "Taste the mixture and sweeten with honey or agave syrup if desired.",
      "Strain the mixture through a fine mesh sieve into a pitcher to remove any pulp.",
      "Serve the cucumber mint cooler over ice cubes.",
      "Garnish with fresh mint leaves and cucumber slices if desired.",
      "Enjoy the refreshing and hydrating taste of this cooler!"
    ]
  },
  {
    id: 6,
    title: "Pineapple Ginger Smoothie",
    image: n6card,
    description: "A tropical and tangy smoothie with the zing of ginger, packed with vitamins and antioxidants.",
    prepTime: "10 minutes",
    calories: "150 calories",
    ingredients: [
      "2 cups fresh pineapple chunks",
      "1 teaspoon grated fresh ginger",
      "1 cup coconut water or water",
      "1/2 cup Greek yogurt (optional)",
      "Ice cubes"
    ],
    procedure: [
      "In a blender, combine fresh pineapple chunks, grated ginger, coconut water or water, and Greek yogurt if using.",
      "Blend until smooth and creamy.",
      "Add ice cubes and blend again until the smoothie reaches your desired consistency.",
      "Taste and adjust sweetness or tanginess by adding more pineapple or ginger if desired.",
      "Pour into glasses and serve immediately.",
      "Enjoy the tropical flavors and health benefits of this pineapple ginger smoothie!"
    ]
  }
  
  
  
  
];

const DrinkCategory = () => {
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
        <h2 className="section__header">Drink Category</h2>
        <nav className='category__list-holder'>
        <ul className="category__list">
          <li><Link to="/"><FaHome className='li1' />Home</Link></li>
          <li><Link to="/food"><FaUtensils className='li2' />Food</Link></li>
          <li><Link to="/dessert"><FaIceCream className='li3' />Dessert</Link></li>
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
            <button className="close-btn" onClick={handleClose}><i className="fas fa-times"></i></button>
            <h3>{selectedRecipe.title}</h3>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} />
            <p className="description">{selectedRecipe.description}</p>
            <div className="prep-cal">
            <div className="prep-time">
              <FaClock /> <span>Prep time: {selectedRecipe.prepTime}</span>
            </div>
            <div className='cal-count'>
            <FaFire /> <span> Calorie Count : {selectedRecipe.calories}</span>  
            </div>
            </div>
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
      )}
    </div>
  );
};

export default DrinkCategory;


