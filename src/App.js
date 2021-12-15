import './Style.scss';
import 'bulma/css/bulma.min.css'
import Home from './pages/Home'
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar' 
import About from './pages/About';
import ContactUs from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/dana" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
