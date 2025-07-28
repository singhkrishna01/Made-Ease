import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Review from "./components/Review";
import Footer from "./components/Footer"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
         <Footer/>
    </Router>
  );
}

export default App;
