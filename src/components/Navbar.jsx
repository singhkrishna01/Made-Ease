import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../cssfiles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Maid<span>Ease</span></div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Services
        </NavLink>
        <NavLink
          to="/review"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Review
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
        <span className={`line ${isOpen ? "open" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
