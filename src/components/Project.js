import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    const { title, description, languages, screenshots } = this.props;
    const currentScreenshotIndex = this.props.currentScreenshotIndex || 0;
    const currentScreenshot = screenshots[currentScreenshotIndex];

    return (
      <>
        <div className="project">
          <div className="project-card">
            <div className="ss">
              <div>
                <h3 className="project-title">{title}</h3>
              </div>
              <img
                src={currentScreenshot}
                alt={`${title} screenshot`}
                className="project-screenshot"
              />
            </div>

            <div className="cardp">
              {/* <div>
                <h3 className="project-title">{title}</h3>
              </div> */}

              <div className="glass-card">
                <p className="project-description">{description}</p>
                <p style={{ color: "blue" }}>Individual project</p>
              </div>
              <div className="project-details">
                <div className="project-languages">
                  <ul>
                    {languages.map((language, index) => (
                      <li key={index}>{language}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Project;
