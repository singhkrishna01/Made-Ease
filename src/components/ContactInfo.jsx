import React from 'react'

const ContactInfo = () => {
  return (
    <div className="contact-page-container">
    {/* Contact Section */}
    <section className="contact-page-details">
      <h1 className="contact-page-title">Get in Touch</h1>
      <button
        className="contact-page-call-btn"
        onClick={() => (window.location.href = "tel:08062208322")}
      >
        📞 Call Now: 08062208322
      </button>
      <div className="contact-page-info">
        <h3 className="contact-page-info-heading">Contacts</h3>
        <p className="contact-page-info-text">08062208322</p>
        <h3 className="contact-page-info-heading">Location</h3>
        <p className="contact-page-info-text">
          XXXX, XXXXX, XXXXXXXX, XXXXX, XXXXXXX, XXXXXXX, India
        </p>
        <h3 className="contact-page-info-heading">Timings</h3>
        <p className="contact-page-info-text">Monday - Sunday (09:00 AM - 09:00 PM)</p>
      </div>
    </section>

    {/* Image Section */}
    <section className="contact-page-image">
      <img
        src="/contactus.svg" // Replace with your actual image URL
        alt="Contact Us Illustration"
      />
    </section>
  </div>
  )
}

export default ContactInfo