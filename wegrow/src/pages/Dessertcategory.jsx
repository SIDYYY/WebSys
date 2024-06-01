import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFire, FaHome, FaUtensils, FaGlassCheers, FaClock } from 'react-icons/fa';
import n1card from '../imgs/fruit-salad-98841227-5848619a5f9b5851e5f87d5c.webp';
import n2card from '..//imgs/IMG_0075-banana-pudding.webp';
import n3card from '../imgs/Greek-Yogurt-Parfait-Recipe.webp';
import n4card from '../imgs/vanilla-chia-seed-pudding-10.webp';
import n5card from '../imgs/dark-chocolate-avocado-mousse-recipe.webp';
import n6card from '../imgs/Frozen-Yogurt-Bark-Recipe.webp';

import '../styles/food.css';

const recipes = [
  {
    id: 1,
    title: "Fruit Salad",
    image: n1card,
    description: "Refreshing mix of fresh fruits.",
    prepTime: "10-20 minutes",
    calories: "90 calories",
    ingredients: [
      "Assorted fresh fruits (such as strawberries, blueberries, grapes, kiwi, pineapple, and mango), chopped or sliced",
      "Honey or maple syrup (optional)"
    ],
    procedure: [
      "Wash and prepare the fruits by chopping or slicing them into bite-sized pieces.",
      "Combine the fruits in a large bowl.",
      "Drizzle with honey or maple syrup if desired, and gently toss to coat.",
      "Serve immediately or chill in the refrigerator before serving.",
      "Top with your favorite optional toppings if desired.",
      "Serve immediately and enjoy!"
    ]
  },
  {
    id: 2,
    title: "Banana Pudding",
    image: n2card,
    description: "Classic layers of bananas, pudding, and wafers.",
    prepTime: "10-20 minutes",
    calories: "250 calories",
    ingredients: [
      "2 ripe bananas, sliced",
      "1 box instant vanilla pudding mix",
      "2 cups cold milk",
      "1 package vanilla wafers",
      "Whipped cream (optional)"
    ],
    procedure: [
      "Prepare the instant vanilla pudding according to the package instructions using cold milk. Let it set in the refrigerator for about 5 minutes.",
      "In a serving dish or individual cups, layer the vanilla wafers, sliced bananas, and pudding.",
      "Repeat the layers until you reach the top of the dish, ending with a layer of pudding on top.",
      "Optionally, top with whipped cream.",
      "Chill in the refrigerator for at least 30 minutes before serving."
    ]
  },
  {
    id: 3,
    title: "Greek Yogurt Parfait",
    image: n3card,
    description: "Nutritious layers of yogurt, granola, and berries.",
    prepTime: "10-20 minutes",
    calories: "200 calories",
    ingredients: [
      "1 cup Greek Yogurt",
      "1/2 cup granola",
      "1/2 cup mixed berries (strawberries, blueberries, raspberries)",
      "1 tablespoon honey or maple syrup (optional)",
      "A handful of nuts (such as almonds or walnuts), chopped (optional)"
    ],
    procedure: [
      "In a serving glass or bowl, start by layering half of the Greek yogurt at the bottom.",
      "Sprinkle a layer of granola on top of the yogurt.",
      "Add a layer of mixed berries on top of the granola.",
      "Drizzle a little honey or maple syrup over the berries for added sweetness, if desired.",
      "Repeat the layers with the remaining Greek yogurt, granola, and berries."
    ]
  },
  {
    id: 4,
    title: "Chia Seed Pudding",
    image: n4card,
    description: "Creamy pudding made with nutritious chia seeds, perfect for a healthy dessert or snack.",
    prepTime: "5 minutes + chilling time",
    calories: "180 calories",
    ingredients: [
      "1/4 cup chia seeds",
      "1 cup unsweetened almond milk (or any milk of your choice)",
      "1 tablespoon maple syrup or honey",
      "1/2 teaspoon vanilla extract",
      "Optional toppings: fresh berries, sliced bananas, nuts, shredded coconut"
    ],
    procedure: [
      "In a bowl, whisk together chia seeds, almond milk, maple syrup or honey, and vanilla extract.",
      "Cover the bowl and refrigerate for at least 2 hours or overnight, stirring occasionally, until the mixture thickens into a pudding-like consistency.",
      "Once chilled and thickened, give the pudding a good stir.",
      "Serve the chia seed pudding in individual bowls or jars, and top with your favorite toppings before serving."
    ]
  },
  {
    id: 5,
    title: "Dark Chocolate Avocado Mousse",
    image: n5card,
    description: "Decadent chocolate mousse made with creamy avocado and rich dark chocolate, a healthier alternative to traditional mousse.",
    prepTime: "10 minutes + chilling time",
    calories: "220 calories",
    ingredients: [
      "2 ripe avocados, peeled and pitted",
      "1/4 cup unsweetened cocoa powder",
      "1/4 cup maple syrup or honey",
      "1 teaspoon vanilla extract",
      "Pinch of salt",
      "1/4 cup almond milk (or any milk of your choice)",
      "Optional toppings: fresh berries, shaved dark chocolate, whipped cream (optional)"
    ],
    procedure: [
      "In a food processor or blender, combine the ripe avocados, cocoa powder, maple syrup or honey, vanilla extract, salt, and almond milk.",
      "Blend until smooth and creamy, scraping down the sides of the bowl as needed.",
      "Taste and adjust sweetness if needed by adding more maple syrup or honey.",
      "Transfer the chocolate avocado mixture into serving bowls or glasses.",
      "Cover and refrigerate for at least 1 hour to chill and firm up.",
      "Before serving, top with your favorite toppings such as fresh berries, shaved dark chocolate, or a dollop of whipped cream if desired."
    ]
  },
  {
    id: 6,
    title: "Frozen Yogurt Bark",
    image: n6card,
    description: "Frozen treat made with Greek yogurt, fruit, and nuts, perfect for a refreshing and nutritious dessert.",
    prepTime: "10 minutes + freezing time",
    calories: "180 calories",
    ingredients: [
      "2 cups Greek yogurt (any flavor)",
      "1/4 cup honey or maple syrup",
      "1 teaspoon vanilla extract",
      "1 cup mixed berries (such as strawberries, blueberries, raspberries)",
      "1/4 cup chopped nuts (such as almonds, walnuts, or pecans)",
      "Optional add-ins: shredded coconut, dark chocolate chips, granola"
    ],
    procedure: [
      "In a bowl, mix together Greek yogurt, honey or maple syrup, and vanilla extract until well combined.",
      "Line a baking sheet with parchment paper.",
      "Spread the Greek yogurt mixture evenly onto the parchment paper, about 1/4 inch thick.",
      "Sprinkle the mixed berries and chopped nuts evenly over the yogurt mixture, pressing them down gently with your hands.",
      "Add any optional add-ins if desired, such as shredded coconut or dark chocolate chips.",
      "Place the baking sheet in the freezer and freeze for at least 2 hours or until the yogurt bark is firm.",
      "Once frozen, break the yogurt bark into pieces and serve immediately as a refreshing and nutritious dessert."
    ]
  }
];

const DessertCategory = () => {
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
        <h2 className="section__header">Dessert Category</h2>
        <nav className='category__list-holder'>
        <ul className="category__list">
          <li><Link to="/"><FaHome className='li1' />Home</Link></li>
          <li><Link to="/food"><FaUtensils className='li2' />Food</Link></li>
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

export default DessertCategory;
