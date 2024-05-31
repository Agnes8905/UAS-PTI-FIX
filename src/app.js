import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import Show from './Show';
import Maps from './Map';
import Translate from './Translate';
import AboutUs from './aboutUs';
import Navbar from './Components/Navbar';
import ScrollToTop from './scrollTop';

function App() {
  ScrollToTop(); // Ensure that ScrollToTop is called when the App component mounts

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Show />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
