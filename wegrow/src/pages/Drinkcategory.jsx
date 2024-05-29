import React, { useState } from 'react';
import { FaHome, FaUtensils,  FaIceCream } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import '../styles/food.css'; 
import n1card from '../imgs/green-smoothie-8-1200-500x500.webp';
import n2card from '../imgs/watermelon-coconut-agua-fresca-featured-pic-sq.webp';
import n3card from '../imgs/Triple-Berry-Smoothie-square-featured.webp';

function Drink() {
  const [isn1cardOpen, setIsn1cardOpen] = useState(false);
  const [isn2cardOpen, setIsn2cardOpen] = useState(false);
  const [isn3cardOpen, setIsn3cardOpen] = useState(false);

  const toggleN1Card = () => {
    setIsn1cardOpen(!isn1cardOpen);
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
      <h2 className="section__header">Drink  Category</h2>
      <ul className="category__list">
        <li><Link to="/"><FaHome className='li1'/>Home</Link></li>
        <li><Link to="/food"><FaUtensils className='li2'/>Food</Link></li>
        <li><Link to="/dessert"><FaIceCream className='li3'/>Dessert</Link></li>
      </ul>

      <div className="card-holder">
        <div className="contain">
          <div className={`card ${isn1cardOpen ? 'flipped' : ''}`}>
            <div className="card-inner">
              <div className="card-front">
                <button className="show-btn" onClick={toggleN1Card} title={isn1cardOpen ? 'Hide Ingredients and Procedure' : 'Show Ingredients and Procedure'}>
                  <i className="fas fa-info-circle"></i>
                </button>
                <h3>Green Smoothie</h3>
                        <img src={n1card} alt="fruitsalad"/>
                        <p class="description">Blend spinach, banana, and almond milk. (70-100 calories)</p>
              </div>
              <div className="card-back">
                <div className="show-content">
                <button className="back-btn" onClick={() => setIsn1cardOpen(false)}><i className="fas fa-times"></i></button>
                  <h4>Ingredients</h4>
                            <ol>
                                <li>Handful of spinach</li>
                                <li>1 ripe banana</li>
                                <li>1 cup almond milk</li>
                            </ol>
                            <h4>Procedure</h4>
                            <ol>
                                <li>Wash the spinach thoroughly.</li>
                                <li>Peel and chop the banana.</li>
                                <li>In a blender, combine spinach, banana, and almond milk.</li>
                                <li>Blend until smooth.</li>
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
                <h3>Berry Smoothie</h3>
                      <img src={n2card} alt="bnpuding"/>
                      <p class="description">Combine mixed berries, yogurt, and honey. (150-200 calories)</p>
              </div>
              <div className="card-back">
                <div className="show-content">
                  <button className="back-btn" onClick={toggleN2Card}><i className="fas fa-times"></i></button>
                  <h4>Ingredients</h4>
                          <ol>
                              <li>1 cup mixed berries (strawberries, blueberries, raspberries)</li>
                              <li>1/2 cup yogurt (Greek or regular)</li>
                              <li>1 tablespoon honey (optional)</li>
                          </ol>
                          <h4>Procedure</h4>
                          <ol>
                              <li>Wash the berries and remove any stems.</li>
                              <li>In a blender, combine mixed berries, yogurt, and honey.</li>
                              <li>Blend until smooth.</li>
                              <li>Taste and adjust sweetness if needed.</li>
                              <li>Serve chilled</li>
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
                <h3>Watermelon Cooler</h3>
                    <img src={n3card} alt="gyogurt"/>
                    <p class="description">Mix coconut water, watermelon, and lime juice. (80-120 calories)</p>
              </div>
              <div className="card-back">
                <div className="show-content">
                  <button className="back-btn" onClick={toggleN3Card}><i className="fas fa-times"></i></button>
                  <h4>Ingredients</h4>
                        <ol>
                            <li>1 cup coconut water</li>
                            <li>2 cups cubed watermelon</li>
                            <li>Juice of 1 lime</li>
 
                        </ol>
                        <h4>Procedure</h4>
                        <ol>
                            <li>Remove the seeds and rind from the watermelon and cut it into cubes.</li>
                            <li>In a blender, combine coconut water, watermelon cubes, and lime juice.</li>
                            <li>Blend until smooth.</li>
                            <li>Strain the mixture if desired to remove any pulp.</li>
                            <li>Serve over ice and garnish with a lime wedge, if desired.</li>

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

export default Drink;


