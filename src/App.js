import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'rsuite/dist/styles/rsuite-default.css';
import mediaQuery from './css/mediaQuery.css';
import css from './css/Style.css';
import aboutStyle from './css/aboutStyle.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import 'react-multi-carousel/lib/styles.css';
import Gotoup from './components/Gotoup';
import ProductCardSection from './components/ProductCardSection';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <AboutUs/> } />
        <Route path="/contact" element={ <ContactUs/> } />
        <Route path="/p" element={ <ProductCardSection/> } />
        
      </Routes>
    </>
  );
}

export default App;
