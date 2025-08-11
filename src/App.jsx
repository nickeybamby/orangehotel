import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Index from "./components/pages/Index";
import About from "./components/pages/About";
import Footer from "./components/footer/Footer";
import Services from "./components/pages/Services";
import Rooms from "./components/pages/Rooms";
import RoomsDetails from "./components/pages/RoomsDetails";
import Checkout from "./components/pages/Checkout";
import Gallery from "./components/pages/gallery/Gallery";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/room" element={<Rooms />} />
          <Route path="/room/:id" element={<RoomsDetails />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
