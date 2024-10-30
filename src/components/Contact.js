import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

class Contact extends Component {
  componentDidMount() {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate once
    });
  }

  handleSayHelloClick = () => {
    const email = "Pratik30sonawane@gmail.com";
    const subject = "Hello from your website!";
    const body = "Hello, Pratik! I visited your website and wanted to say hi.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  render() {
    return (
      <div id="contact" className="cont" data-aos="fade-up">
        <div className="contact-container" data-aos="fade-up">
          <h1 data-aos="fade-down">Contact</h1>
          <h2 data-aos="fade-down">Get in Touch</h2>
          <p data-aos="fade-up">
            I'm looking for new opportunities, my inbox is always open. Whether
            you have a question or just want to say hi, I’ll be so happy to
            connect with you!
          </p>
          <div className="contact-option1" data-aos="zoom-in">
            <p onClick={this.handleSayHelloClick}>Say Hello</p>
          </div>
          <div className="contact-options">
            <a
              href="mailto:Pratik30sonawane@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-option" data-aos="fade-right">
                <p>Write Me</p>
                Pratik30sonawane@gmail.com
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/pratik-sonawane-4b720a22a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-option" data-aos="fade-left">
                <p>Connect Me</p>
                Pratik-Sonawane
              </div>
            </a>
          </div>

          <p data-aos="fade-up">Designed & Built by Pratik Sonawane</p>
        </div>
      </div>
    );
  }
}

export default Contact;
