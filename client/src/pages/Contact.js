import React from "react";
import Nav1 from "../components/Nav1";
import ContactForm from "../components/ContactForm";
import Footer1 from "../components/Footer1";
import "../style/contact.css";

function Contact() {
  return (
    <>
      <Nav1 />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          Well it doesn’t have to be bikes or NYC, it could be anything that you
          think could make Bike NYC better or the world better for that matter.
          To be honest, we would love to hear your thoughts. Bike NYC was
          founded on the idea that we’re all made better by spending time biking
          arouing the city. Today, we continue to be driven by the desire to
          share the outdoors with as many people in as many places as possible —
          and to do so responsibly and respectfully. Before you send us
          anything, have a quick look at our FAQs, you might find a lovely
          answer already there waiting for you. Otherwise, feel free to fill out
          the form below or contact our community team directly. Have a great
          rest of your day and bike safe!
        </p>
      </div>
      <ContactForm />
      <Footer1 />
    </>
  );
}
export default Contact;
