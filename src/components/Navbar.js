// Header.js

import React, { Component } from "react";
import { scroller } from "react-scroll";
import "./Navbar.css";
import res from "../Logo/res.pdf";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      isNavOpen: false,
    };

    // Create a ref for the navigation menu
    this.menuRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    // Add an event listener to close the menu when clicking outside of it
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.menuRef.current && !this.menuRef.current.contains(event.target)) {
      this.setState({ isNavOpen: false });
    }
  };

  handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50 && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (scrollY <= 50 && this.state.scrolled) {
      this.setState({ scrolled: false });
    }
  };

  toggleNav = () => {
    this.setState((prevState) => ({
      isNavOpen: !prevState.isNavOpen,
    }));
  };

  scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };

  handlehomeClick = () => {
    this.scrollTo("Home");
    this.toggleNav();
  };

  handleAboutClick = () => {
    this.scrollTo("About");
    this.toggleNav();
  };

  handleProjectClick = () => {
    this.scrollTo("Project");
    this.toggleNav();
  };

  handleSkillsClick = () => {
    this.scrollTo("skills");
    this.toggleNav();
  };

  handlecontactClick = () => {
    this.scrollTo("contact");
    this.toggleNav();
  };

  handleResumeDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = res;
    downloadLink.download = "Resume_Pratik(New).pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    this.toggleNav();
  };

  render() {
    const { scrolled, isNavOpen } = this.state;

    return (
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="pr">
            <ul>
              <li>Pratik Sonawane</li>
            </ul>
          </div>
          <div className={`menu ${isNavOpen ? "open" : ""}`} ref={this.menuRef}>
            <div className="menu-icon" onClick={this.toggleNav}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`links ${isNavOpen ? "open" : ""}`}>
              <li onClick={this.handlehomeClick}>Home</li>
              <li onClick={this.handleAboutClick}>About</li>
              <li onClick={this.handleProjectClick}>Projects</li>
              <li onClick={this.handleSkillsClick}>Skills</li>
              <li onClick={this.handlecontactClick}>Contact</li>
              <li onClick={this.handleResumeDownload} className="res">
                Resume
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
