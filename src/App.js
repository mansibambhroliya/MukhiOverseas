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
import Footer from './components/Footer';
import Enquiry from './components/Enquiry';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <AboutUs/> } />
        <Route path="/contact" element={ <ContactUs/> } />        
        <Route path="/thanks" element={ <Enquiry/> } />        
      </Routes>
    </>
  );
}

export default App;
