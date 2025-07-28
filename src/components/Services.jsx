// Services.jsx
import React from "react";
import "../cssfiles/Services.css";
import { servicesData, skillsData } from "../components/Data"; // Import data from data.js

const Services = () => {
  return (
    <div className="services-page">
     <section className="services-hero">
  <div className="hero-content">
    <h1>Our Services</h1>
    <p>
      Trusted professionals offering diverse domestic services, ensuring
      excellence in care for your home and loved ones' needs.
    </p>
  </div>
</section>

      <section className="services-section">
        <h2>Personalized Care Solutions</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h2>Proficient Skill Sets</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.image} alt={skill.title} className="skill-image" />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
