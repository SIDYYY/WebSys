import React from 'react';
import ReactDOM from 'react-dom'; // Change import statement
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Food from './pages/Foodcategory';
import Dessert  from './pages/Dessertcategory';
import Drinks from './pages/Drinkcategory';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/food" element={<Food />} />
      <Route path="/dessert" element={<Dessert />} />
      <Route path="/drinks" element={<Drinks />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

