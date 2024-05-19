import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/food.css'; 
import avocadoToastImage from '../imgs/EatingWell-April-Avocado-Toast-Beauty-Angle-1x1-5dbdcb43cc6a43d588a620fdb9a42bf4.jpg';
import n2card from '../imgs/spinach-salad.jpg';
import n3card from '../imgs/263217-BakedSalmonInFoil-MFS-MFS-2X3-0269-03a69c31414f46c882dc7d9b8f46534c.jpg';

function Food() {
  const [isAvocadoToastOpen, setIsAvocadoToastOpen] = useState(false);
  const [isn2cardOpen, setIsn2cardOpen] = useState(false);
  const [isn3cardOpen, setIsn3cardOpen] = useState(false);

  const toggleAvocadoToast = () => {
    setIsAvocadoToastOpen(!isAvocadoToastOpen);
  };

  const toggleN2Card = () => {
    setIsn2cardOpen(!isn2cardOpen);
  };

  const toggleN3Card = () => {
    setIsn3cardOpen(!isn3cardOpen);
  };

  return (
    <div className="holder">
    <section className="section__container category__container">
      <p className="section__subheader">WE GROW <span><i className="ri-leaf-fill"></i></span></p>
      <h2 className="section__header">FOOD - Category</h2>
      <ul className="category__list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dessert">Dessert</Link></li>
        <li><Link to="/drinks">Drink</Link></li>
      </ul>
      <div className="card-holder">
        <div className="contain">
          <div className={`card ${isAvocadoToastOpen ? 'flipped' : ''}`}>
            <div className="card-inner">
              <div className="card-front">
                <button className="show-btn" onClick={toggleAvocadoToast} title={isAvocadoToastOpen ? 'Hide Ingredients and Procedure' : 'Show Ingredients and Procedure'}>
                  <i className="fas fa-info-circle"></i>
                </button>
                <h3>Avocado Toast</h3>
                <img src={avocadoToastImage} alt="Avocado Toast" />
                <p className="description">Creamy mashed avocado on toasted bread; cal ranges from 200 to 300 calories.</p>
              </div>
              <div className="card-back">
                <div className="show-content">
                  <button className="back-btn" onClick={toggleAvocadoToast}><i className="fas fa-times"></i></button>
                  <h4>Ingredients</h4>
                  <ol>
                    <li>1 ripe avocado</li>
                    <li>2 slices whole grain bread</li>
                    <li>1 tablespoon lemon juice</li>
                    <li>Salt and pepper to taste</li>
                    <li>Optional toppings: cherry tomatoes, red pepper flakes, sliced radishes, etc.</li>
                  </ol>
                  <h4>Procedure</h4>
                  <ol>
                    <li>Toast the slices of whole grain bread until golden brown.</li>
                    <li>While the bread is toasting, scoop out the flesh of the avocado into a bowl and mash it with a fork.</li>
                    <li>Add lemon juice, salt, and pepper to the mashed avocado and mix well.</li>
                    <li>Spread the mashed avocado evenly on the toasted bread slices.</li>
                    <li>Top with your favorite optional toppings if desired.</li>
                    <li>Serve immediately and enjoy!</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contain">
          <div className={`card ${isn2cardOpen ? 'flipped' : ''}`}>
            <div className="card-inner">
              <div className="card-front">
                <button className="show-btn" onClick={toggleN2Card} title={isn2cardOpen ? 'Hide Ingredients and Procedure' : 'Show Ingredients and Procedure'}>
                  <i className="fas fa-info-circle"></i>
                </button>
                <h3>Spinach Salad</h3>
                <img src={n2card} alt="Spinach Salad" />
                <p className="description">Fresh spinach leaves with toppings usually around 150 to 250 calories.</p>
              </div>
              <div className="card-back">
                <div className="show-content">
                  <button className="back-btn" onClick={toggleN2Card}><i className="fas fa-times"></i></button>
                  <h4>Ingredients</h4>
                  <ol>
                    <li>Baby spinach leaves</li>
                    <li>Cherry tomatoes, halved</li>
                    <li>Cucumber, sliced</li>
                    <li>Red onion, thinly sliced</li>
                    <li>Feta cheese, crumbled</li>
                    <li>Balsamic vinegar</li>
                    <li>Olive oil</li>
                    <li>Salt and pepper</li>
                  </ol>
                  <h4>Procedure</h4>
                  <ol>
                    <li>In a large salad bowl, combine baby spinach leaves, cherry tomatoes, cucumber slices, red onion slices, and crumbled feta cheese.</li>
                    <li>In a small bowl, whisk together balsamic vinegar, olive oil, salt, and pepper to make the dressing.</li>
                    <li>Drizzle the dressing over the salad and toss to coat evenly.</li>
                    <li>Serve immediately as a nutritious and flavorful salad.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contain">
          <div className={`card ${isn3cardOpen ? 'flipped' : ''}`}>
            <div className="card-inner">
              <div className="card-front">
                <button className="show-btn" onClick={toggleN3Card} title={isn3cardOpen ? 'Hide Ingredients and Procedure' : 'Show Ingredients and Procedure'}>
                  <i className="fas fa-info-circle"></i>
                </button>
                <h3>Baked Salmon</h3>
                <img src={n3card} alt="Baked Salmon" />
                <p className="description">Seasoned salmon fillets baked approximately 250 to 350 calories per serving.</p>
              </div>
              <div className="card-back">
                <div className="show-content">
                  <button className="back-btn" onClick={toggleN3Card}><i className="fas fa-times"></i></button>
                  <h4>Ingredients</h4>
                  <ol>
                    <li>Salmon fillets</li>
                    <li>Lemon slices</li>
                    <li>Fresh herbs (such as dill, parsley, or thyme)</li>
                    <li>Olive oil</li>
                    <li>Salt and pepper</li>
                  </ol>
                  <h4>Procedure</h4>
                  <ol>
                    <li>Preheat the oven to 375°F (190°C).</li>
                    <li>Place salmon fillets on a baking sheet lined with parchment paper.</li>
                    <li>Drizzle olive oil over the salmon fillets and season with salt and pepper.</li>
                    <li>Place lemon slices and fresh herbs on top of each salmon fillet.</li>
                    <li>Bake in the preheated oven for 12-15 minutes or until the salmon is cooked through and flakes easily with a fork.</li>
                    <li>Serve immediately with your favorite side dishes for a healthy and delicious meal.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}

export default Food;

