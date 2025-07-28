import React from "react";
import "../cssfiles/Contact.css";
import MapC from "./MapC";
import ContactInfo from "./ContactInfo";
const Contact = () => {
  return (
    <div className="super-container">
      <ContactInfo/>
      <MapC/>
    </div>
  );
};

export default Contact;
