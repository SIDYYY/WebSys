import React from 'react';
import Header from './Header';
import Home from './Mainhome';
import Category from './Category';
import Qoutes from './Qoutes'
import About from './About';
import Team from './Team';
import Contact from './Contact';

const SharedComponents = () => {
  return (
    <div>
      <Header />
      <Home />
      <Qoutes />
      <About />
      <Category/>
      <Team />
      <Contact />
    </div>
  );
};

export default SharedComponents;
