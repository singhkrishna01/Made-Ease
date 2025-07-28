import React, { useState, useEffect } from "react";
import "../cssfiles/Home.css";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../components/Data"; // Importing the services data
import ContactInfo from "./ContactInfo";

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images for the slideshow
  const slides = [
    { src: "/domestichelp.jpeg", alt: "Reliable Domestic Help" },
    { src: "/patient.jpeg", alt: "Professional Caregivers" },
    { src: "/prof_chef.jpeg", alt: "Culinary Experts" },
    { src: "/babycare.jpeg", alt: "24/7 Support" },
  ];

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Home Maid Services</h1>
          <p>Trusted Partners for Maid Services</p>
          <button className="hero-btn">Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <div className="about-section">
        <div className="about-image">
          {/* Ensure the correct path to your video file */}
          <video src="video_new.mp4" autoPlay loop muted playsInline></video>
        </div>
        <div className="about-text">
          <h2>Home Maid Services</h2>
          <p>
            We "Home Maid services" are domestic staff providers for our valued customers. 
            We take your domestic help responsibilities on our shoulders and provide you with skilled and verified maids, japa maids, baby caretakers, old carers, domestic helpers, cook, house servant, patient caretaker, etc. 
            We have achieved expertise in catering to the requirements of our clients exactly as per their specifications. 
            We emphasize stringent quality standards in order to ensure that the services provided to our clients are always optimum to their level. 
            All such people are well-trained and experienced to give the best performance in their jobs.
          </p>
        </div>
      </div>

      {/* Slideshow Section */}
      <section className="slideshow-section">
        <h2>Our Expertise</h2>
        <div className="slideshow">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${
                index === currentSlide
                  ? "active"
                  : index === (currentSlide + 1) % slides.length
                  ? "next"
                  : index === (currentSlide - 1 + slides.length) % slides.length
                  ? "previous"
                  : ""
              }`}
            >
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        {/* Navigation Dots */}
        <div className="slideshow-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <p>
          Trusted professionals offering diverse domestic services, ensuring excellence in care for your home and loved ones' needs.
        </p>
        <div className="services-grid">
          {servicesData.slice(0, 4).map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <button
          className="hero-btn"
          style={{ margin: "3rem" }}
          onClick={() => navigate(`/services`)}
        >
          View More
        </button>
      </section>

      {/* Contact Section */}
      <ContactInfo />
    </div>
  );
};

export default Home;
