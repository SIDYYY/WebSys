import React, { useState } from 'react';
import { FaHome, FaUtensils, FaGlassCheers } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import '../styles/food.css'; 
import n1card from '../imgs/fruit-salad-98841227-5848619a5f9b5851e5f87d5c.webp';
import n2card from '../imgs/IMG_0075-banana-pudding.webp';
import n3card from '../imgs/Greek-Yogurt-Parfait-Recipe.webp';

function Dessert() {
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
      <h2 className="section__header">Dessert Category</h2>
      <ul className="category__list">
        <li><Link to="/"><FaHome className='li1'/>Home</Link></li>
        <li><Link to="/food"><FaUtensils className='li2'/>Food</Link></li>
        <li><Link to="/drinks"><FaGlassCheers className='li3'/>Drink</Link></li>
      </ul>
      <div className="card-holder">
        <div className="contain">
          <div className={`card ${isn1cardOpen ? 'flipped' : ''}`}>
            <div className="card-inner">
              <div className="card-front">
                <button className="show-btn" onClick={toggleN1Card} title={isn1cardOpen ? 'Hide Ingredients and Procedure' : 'Show Ingredients and Procedure'}>
                  <i className="fas fa-info-circle"></i>
                </button>
                <h3>Fruit Salad</h3>
                        <img src={n1card} alt="fruitsalad"/>
                        <p class="description">Refreshing mix of fresh fruits. (70-100 calories)</p>
              </div>
              <div className="card-back">
                <div className="show-content">
                <button className="back-btn" onClick={() => setIsn1cardOpen(false)}><i className="fas fa-times"></i></button>
                  <h4>Ingredients</h4>
                            <ol>
                                <li>Assorted fresh fruits (such as strawberries, blueberries, grapes, kiwi, pineapple, and mango), chopped or sliced

                                </li>
                                <li>Honey or maple syrup (optional)
                                </li>
                            </ol>
                            <h4>Procedure</h4>
                            <ol>
                                <li>Wash and prepare the fruits by chopping or slicing them into bite-sized pieces.</li>
                                <li>Combine the fruits in a large bowl.</li>
                                <li>Drizzle with honey or maple syrup if desired, and gently toss to coat.</li>
                                <li>Serve immediately or chill in the refrigerator before serving.</li>
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
                <h3>Banana Puding</h3>
                      <img src={n2card} alt="bnpuding"/>
                      <p class="description">Classic layers of bananas, pudding, and wafers. (200-300 calories)</p>
              </div>
              <div className="card-back">
                <div className="show-content">
                  <button className="back-btn" onClick={toggleN2Card}><i className="fas fa-times"></i></button>
                  <h4>Ingredients</h4>
                          <ol>
                              <li>2 ripe bananas, sliced</li>
                              <li>1 box instant vanilla pudding mix</li>
                              <li>2 cups cold milk</li>
                              <li>1 package vanilla wafers</li>
                              <li>Whipped cream (optional)</li>
                          </ol>
                          <h4>Procedure</h4>
                          <ol>
                              <li>Prepare the instant vanilla pudding according to the package instructions using cold milk. Let it set in the refrigerator for about 5 minutes.</li>
                              <li>In a serving dish or individual cups, layer the vanilla wafers, sliced bananas, and pudding.</li>
                              <li>Repeat the layers until you reach the top of the dish, ending with a layer of pudding on top.</li>
                              <li>Optionally, top with whipped cream.</li>
                              <li>Chill in the refrigerator for at least 30 minutes before serving.</li>
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
                <h3>Greek Yogurt Parfait                    </h3>
                    <img src={n3card} alt="gyogurt"/>
                    <p class="description">Nutritious layers of yogurt, granola, and berries. (150-250 calories)</p>
              </div>
              <div className="card-back">
                <div className="show-content">
                  <button className="back-btn" onClick={toggleN3Card}><i className="fas fa-times"></i></button>
                  <h4>Ingredients</h4>
                        <ol>
                            <li>1 cup Greek Yogurt</li>
                            <li>1/2 cup granola</li>
                            <li>1/2 cup mixed berries (strawberries, blueberries, raspberries)</li>
                            <li>1 tablespoon honey or maple syrup (optional)</li>
                            <li>A handful of nuts (such as almonds or walnuts), chopped (optional)</li>
                        </ol>
                        <h4>Procedure</h4>
                        <ol>
                            <li>In a serving glass or bowl, start by layering half of the Greek yogurt at the bottom.</li>
                            <li>Sprinkle a layer of granola on top of the yogurt.</li>
                            <li>Add a layer of mixed berries on top of the granola.</li>
                            <li>Drizzle a little honey or maple syrup over the berries for added sweetness, if desired.</li>
                            <li>Repeat the layers with the remaining Greek yogurt, granola, and berries.</li>
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

export default Dessert;

