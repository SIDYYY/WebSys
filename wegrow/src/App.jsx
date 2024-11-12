import './styles/wegrow.css';
import './styles/food.css'; 
import Header from './pages/Header';
import Home from './pages/Mainhome';
import Category from './pages/Category';
import Qoutes from './pages/Qoutes';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import './script';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Qoutes />
      <About />
      <Category />
      <Team />
      <Contact />
    </>
  );
}

export default App;