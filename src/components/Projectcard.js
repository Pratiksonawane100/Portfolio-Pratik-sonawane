import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "./Project";
import "./Project.css";
import weather from "../Logo/weather.png";
import food from "../Logo/Food.png";
import food1 from "../Logo/Food1.png";
import login from "../Logo/login.png";
import T1 from "../Logo/T1.png";
import T2 from "../Logo/T2.png";
import a from "../images/1.png";
import b from "../images/2.png";
import c from "../images/3.png";
import d from "../images/4.png";
import e from "../images/5.png";
import f from "../images/6.png";
import g from "../images/7.png";
import h from "../images/8.png";
import i from "../images/9.png";
import j from "../images/10.png";
import cabin1 from "../images/11.png";
import cabin2 from "../images/12.png";
import cabin3 from "../images/13.png";
import cabin4 from "../images/14.png";
import cabin5 from "../images/15.png";

import world from "../images/16.png";
class ProjectScreen extends Component {
  state = {
    projects: [
      {
        title: "1. Pizzapalll",
        description:
          "Pizzapall is a sleek React app designed for pizza enthusiasts, offering a seamless ordering experience. Browse menus, customize your pizza, read user reviews, and track deliveries in real-time. With an intuitive interface and responsive design, Pizzapall makes enjoying your favorite pizza easier than ever.",
        languages: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Node.js"],
        screenshots: [a, b, c, d, e, f, g, h, i, j],
        currentScreenshotIndex: 0,
      },
      {
        title: "2. World Wise",
        description:
          "WorldWise is an innovative map application designed for travel enthusiasts. It enables users to easily mark specific locations and countries they wish to visit. With a user-friendly interface, travelers can set their desired destinations, save their favorite spots, and share their travel plans with friends, making exploration more exciting and organized.",
        languages: ["Vite", "JavaScript", "API", "Tailwind"],
        screenshots: [world],
        currentScreenshotIndex: 0,
      },
      {
        title: "3. Cabin Vista",
        description:
          "Developed a robust booking application that streamlines customer check-ins and check-outs, ensuring a seamless user experience. Leveraged Next.js for rapid development and efficient bundling, significantly boosting app performance. Integrated Supabase as the backend solution, providing real-time data storage and authentication for enhanced reliability and user engagement.",
        languages: ["Vite", "JavaScript", "API", "Tailwind"],
        screenshots: [cabin5, cabin4, cabin3, cabin1, cabin2],
        currentScreenshotIndex: 0,
      },
      {
        title: "4. Weather APP",
        description:
          "Our Tourism Weather API App provides travelers with real-time weather updates, ensuring optimal trip planning. With a user-friendly interface, the app offers accurate forecasts, enhancing the travel experience. Explore our portfolio to witness the project's commitment to seamless, weather-informed journeys.",
        languages: ["HTML", "CSS", "JavaScript", "API"],
        screenshots: [weather],
        currentScreenshotIndex: 0,
      },
      {
        title: "5. Food Delivery",
        description:
          "Introducing our innovative food delivery project, seamlessly connecting users with their favorite cuisines. Our platform prioritizes user-friendly interfaces, real-time order tracking, and a diverse portfolio of partner restaurants. Elevate your dining experience with our reliable and efficient food delivery service.",
        languages: ["HTML", "CSS", "JavaScript", "React"],
        screenshots: [food, food1],
        currentScreenshotIndex: 0,
      },
      {
        title: "6. Tourism",
        description:
          "Our Tourism Website project combines captivating design with essential travel information, offering users an immersive journey into destinations worldwide. With user-friendly navigation and rich visual content, the portfolio reflects our commitment to enhancing the travel experience and inspiring wanderlust.",
        languages: ["HTML", "CSS", "JavaScript"],
        screenshots: [login, T1, T2],
        currentScreenshotIndex: 0,
      },
    ],
  };

  componentDidMount() {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Animation will happen only once when scrolling down
    });

    // Change the image every 4 seconds
    this.intervalId = setInterval(this.changeScreenshot, 4000);
  }

  componentWillUnmount() {
    // Clear the interval to avoid memory leaks
    clearInterval(this.intervalId);
  }

  changeScreenshot = () => {
    this.setState((prevState) => ({
      projects: prevState.projects.map((project) => ({
        ...project,
        currentScreenshotIndex:
          (project.currentScreenshotIndex + 1) % project.screenshots.length,
      })),
    }));
  };

  render() {
    return (
      <div className="project-screen" id="Project">
        <h2 data-aos="fade-down">My Projects</h2>

        <div className="project-list">
          {this.state.projects.map((project, index) => (
            <div key={index} data-aos="fade-up">
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectScreen;
