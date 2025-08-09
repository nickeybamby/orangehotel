import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Index from './components/pages/Index';
import About from './components/pages/About';
import Footer from './components/footer/Footer';
import Services from './components/pages/Services';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
