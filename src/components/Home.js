import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import ProfilePic from "../Logo/Photo.jpg"; // Replace with your profile picture
import EmailIcon from "../Logo/contact.png"; // Replace with your email icon
import Git from "../Logo/Git.png";
import In from "../Logo/In.png";

class Home extends Component {
  componentDidMount() {
    // Initialize AOS animations
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Only animate once
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }

  render() {
    return (
      <>
        <div className="home" id="Home">
          <div className="profile-pic1" data-aos="fade-down">
            <img title="Pratik Sonawane" src={ProfilePic} alt="Profile" />
          </div>
          <div className="prop-con">
            <div className="profile-info" data-aos="fade-up">
              <div className="profile-details">
                <h2>Hi, my name is</h2>
                <h1>Pratik Sonawane</h1>
                <p>Full-Stack Developer</p>
              </div>
            </div>
            <div className="profile-description" data-aos="fade-up">
              <p>
                Highly skilled backend developer adept at contributing to a
                highly collaborative work environment. Designed and developed
                web applications across multiple APIs, third-party integrations,
                and databases.
              </p>
            </div>
            <div className="contact-button" data-aos="fade-up">
              <a href="mailto:your.email@example.com">
                <div className="email-icon">
                  <img src={EmailIcon} alt="Email" />
                </div>
                <span>Contact</span>
              </a>
            </div>
            <div className="social-icons" data-aos="fade-up">
              <a
                href="https://github.com/Pratiksonawane100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Git} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/pratik-sonawane-4b720a22a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={In} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
