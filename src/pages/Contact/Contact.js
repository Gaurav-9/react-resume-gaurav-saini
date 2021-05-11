import React from "react";
import { useState, useEffect } from "react";

import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import checkMarkLogo from "./Images/964418-middle.png";

function ContactForm() {
  const [state, handleSubmit] = useForm("xpzkznzj");

  if (state.succeeded) {
    return (
      <div id="submitted-true-flex">
        <div id="submission-true-text">
          Thank you for your submission, it has been recived in my inbox. I
          often reply in a 24 hour peroid.
          <img alt="image" id="check-mark-logo" src={checkMarkLogo}></img>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id="flex-container-row">
        <input
          id="name-and-email-entry"
          type="name"
          name="name"
          placeholder="Name"
          required
        />
        <input
          id="name-and-email-entry"
          type="email"
          name="email"
          required
          placeholder="Email"
        />
      </div>
      <div id="container-message">
        <textarea id="message" name="message" required placeholder="Message" />
      </div>
      <button
        id="contact-submit-button"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

function Contact() {
  const [mapMargin, setMapMargin] = useState({ opacity: "1" });
  // setMapMargin({marginTop:"600px"});

  return (
    <div id="contact-div">
      <h1 id="contact-page-header">Contact Me!</h1>
      <div id="contact-page-header-description">
        I am looking to connect with professionals in the field! Please feel
        free to send me a message through the form below.
      </div>
      <div id="header-bottom-border"></div>
      <ContactForm />
      <div id="location-header">My Location</div>
      <iframe
        style={mapMargin}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184531.1931233907!2d-79.89962656639605!3d43.72509658218219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15eaa5d05abf%3A0x352d31667cc38677!2sBrampton%2C%20ON!5e0!3m2!1sen!2sca!4v1618176714911!5m2!1sen!2sca"
        id="location-map"
      ></iframe>
    </div>
  );
}
export default Contact;
