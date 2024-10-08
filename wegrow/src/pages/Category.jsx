import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/wegrow.css';
import food1 from '../imgs/263217-BakedSalmonInFoil-MFS-MFS-2X3-0269-03a69c31414f46c882dc7d9b8f46534c.webp';
import food2 from '../imgs/spinach-salad.webp';
import food3 from '../imgs/EatingWell-April-Avocado-Toast-Beauty-Angle-1x1-5dbdcb43cc6a43d588a620fdb9a42bf4.webp';
import dessert1 from '../imgs/Greek-Yogurt-Parfait-Recipe.webp';
import dessert2 from '../imgs/fruit-salad-98841227-5848619a5f9b5851e5f87d5c.webp';
import dessert3 from '../imgs/IMG_0075-banana-pudding.webp';
import drink1 from '../imgs/green-smoothie-8-1200-500x500.webp';
import drink2 from '../imgs/Triple-Berry-Smoothie-square-featured.webp';
import drink3 from '../imgs/watermelon-coconut-agua-fresca-featured-pic-sq.webp';

function Category() {
  const [foodIndex, setFoodIndex] = useState(0);
  const [dessertIndex, setDessertIndex] = useState(0);
  const [drinksIndex, setDrinksIndex] = useState(0);

  const foodImages = [food1, food2, food3];
  const dessertImages = [dessert1, dessert2, dessert3];
  const drinksImages = [drink1, drink2, drink3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFoodIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
      setDessertIndex((prevIndex) => (prevIndex + 1) % dessertImages.length);
      setDrinksIndex((prevIndex) => (prevIndex + 1) % drinksImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [foodImages.length, dessertImages.length, drinksImages.length]);

  return (
    <div id="categ">
      <div className="ctg-head">
        <div className="cat">
          <h1 className='reveal disappear'>Category</h1>
        </div>
      </div>
      <div className="ctg-container-holder reveal disappear">
        <div className="category-container reveal disappear">
          <div className="categories food reveal disappear">
            <h2>Food</h2>
            <div className="image-container">
              <img src={foodImages[foodIndex]} alt="Food" className="food-image" />
            </div>
            <button className="ctg-button"><Link to="/food">MORE RECIPES</Link></button>
          </div>
          <div className="categories dessert reveal disappear">
            <h2>Dessert</h2>
            <div className="image-container">
              <img src={dessertImages[dessertIndex]} alt="Dessert" className="dessert-image" />
            </div>
            <button className="ctg-button"><Link to="/dessert">MORE RECIPES</Link></button>
          </div>
          <div className="categories drinks reveal disappear">
            <h2>Drinks</h2>
            <div className="image-container">
              <img src={drinksImages[drinksIndex]} alt="Drinks" className="drinks-image" />
            </div>
            <button className="ctg-button"><Link to="/drinks">MORE RECIPES</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;