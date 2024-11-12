import React from 'react';
import ReactDOM from 'react-dom'; 
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App'; 
import Food from './pages/Foodcategory';
import Dessert from './pages/Dessertcategory';
import Drinks from './pages/Drinkcategory';
import Top from './scroll';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Top />
      <Routes>
        <Route path="/bombeo-daguinotas" element={<App />} /> 
        <Route path="/food" element={<Food />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();

