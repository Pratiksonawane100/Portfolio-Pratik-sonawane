import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";
import html from "./Html.png";
import Css from "./Css.png";
import React1 from "./React.png";
import Js1 from "./Js.png";
import Node from "./Node.png";
import Mongo from "./Mongo.png";
import sql from "../Logo/sql.png";
import ex from "../Logo/ex.png";
import git from "../Logo/git1.png";
import github from "../Logo/github.png";
import boot from "../Logo/Boot.png";
import aws from "../Logo/aws.png";

class Skills extends Component {
  constructor(props) {
    super(props);
    // Define the initial state if needed
    this.state = {
      skills: [
        { name: "HTML", logo: html },
        { name: "CSS", logo: Css },
        { name: "JavaScript", logo: Js1 },
        { name: "React", logo: React1 },
        { name: "Node.js", logo: Node },
        { name: "MongoDB", logo: Mongo },
        { name: "SQL", logo: sql },
        { name: "Express.js", logo: ex },
        { name: "Git", logo: git },
        { name: "GitHub", logo: github },
        { name: "Bootstrap", logo: boot },
        { name: "AWS", logo: aws },
      ],
    };
  }

  componentDidMount() {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate once
    });
  }

  render() {
    const { skills } = this.state;

    return (
      <div className="con" id="skills" data-aos="fade-up">
        <h1 className="font" data-aos="fade-down">
          Skills
        </h1>
        <div className="skill-cards-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" data-aos="zoom-in">
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <h2 className="skill-name">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
