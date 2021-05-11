import React from "react";
import "./SkillsWithBootStrap.css";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";

// SKILL CAROUSEL LOGO IMPORTS
import reactLogo from "./Images/reactjs-icon.svg";
import javascriptLogo from "./Images/480px-Unofficial_JavaScript_logo_2.svg.png";
import htmlLogo from "./Images/logo-2582748_1280.png";
import cssLogo from "./Images/logo-2582747_1280.png";

import cppLogo from "./Images/534-5342172_c-language-course-c-logo.png";

import skillsLogo from "./Images/skill-logo-png-3.png";
import communicationLogo from "./Images/assistive-listening-systems-solid.svg";
import electricBoltLogo from "./Images/bolt-solid.svg";
import microchipLogo from "./Images/microchip-solid.svg";

function Skills() {
  const skillCards = [
    {
      skillId: 1,
      image: javascriptLogo,
      title: "JavaScript",
      description:
        "Text-based programming language used both on the client-side and server-side coding",
      style: {
        borderRadius: "15px",
      },
    },

    {
      skillId: 0,
      image: reactLogo,
      title: "React",
      description:
        "Open-source, front end, JavaScript library for building user interfaces or UI components.",
      learnMoreLink: "https://reactjs.org/",
    },
    {
      skillId: 2,
      image: htmlLogo,
      title: "HTML",
      description:
        "Standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      skillId: 3,
      image: cssLogo,
      title: "CSS",
      description:
        "Style sheet language used for describing the presentation of a document written in a markup language such as HTML",
    },
    {
      skillId: 4,
      image: cppLogo,
      title: "C++",
      description:
        "General-purpose programming language created by Bjarne Stroustrup as an extension of the C",
      style: { marginTop: "15px" },
    },
  ];

  // FUNCTIONS FOR CAROUSEL

  return (
    <div id="main-skills-div">
      <div id="programming-skills-header">Programming Skills</div>
      <div id="home-header-introduction">
        Skills aquired from work experience and personal projects.
      </div>
      <div id="header-bottom-border"></div>
      <div id="carousel-holder-div">
        <Carousel id="carousel-component">
          <Carousel.Item>
            <div className="image-title-div">
              <div className="carousel-card-title">
                <img
                  alt="image"
                  id="javascript-carousel-logo"
                  className="carousel-card-image"
                  src={skillCards[0].image}
                ></img>
                <div id="javascript-title">{skillCards[0].title}</div>

                <div className="carousel-card-description">
                  {skillCards[0].description}
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="image-title-div">
              <div className="carousel-card-title">
                <img
                  alt="image"
                  style={skillCards[1].style}
                  className="carousel-card-image"
                  src={skillCards[1].image}
                ></img>
                <div>{skillCards[1].title}</div>

                <div className="carousel-card-description">
                  {skillCards[1].description}
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="image-title-div">
              <div className="carousel-card-title">
                <img
                  alt="image"
                  className="carousel-card-image"
                  src={skillCards[2].image}
                ></img>
                <div>{skillCards[2].title}</div>

                <div className="carousel-card-description">
                  {skillCards[2].description}
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="image-title-div">
              <div className="carousel-card-title">
                <img
                  alt="image"
                  className="carousel-card-image"
                  src={skillCards[3].image}
                ></img>
                <div>{skillCards[3].title}</div>

                <div className="carousel-card-description">
                  {skillCards[3].description}
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="image-title-div">
              <div className="carousel-card-title">
                <img
                  alt="image"
                  className="carousel-card-image"
                  src={skillCards[4].image}
                ></img>
                <div>{skillCards[4].title}</div>

                <div
                  style={skillCards[4].style}
                  className="carousel-card-description"
                >
                  {skillCards[4].description}
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div id="header-bottom-border2"></div>

      <div id="other-skills-header">Other Skills</div>
      <ul className="other-skills-ul">
        <li className="other-skills-li">
          <div>
            <div className="ee-bar-design"></div>
          </div>
          <div className="card-info">
            <div className="ee-card-header">Communication Skills</div>
            <div className="ee-card-header-description">
              Developed through customer service and leadership positions.
            </div>
            <div className="ee-card-description">Workplace Skill</div>
            <div className="bottom-border"></div>
          </div>

          <div>
            <a>
              <img
                alt="image"
                className="education-logo"
                id="communication-skill-logo"
                src={communicationLogo}
              ></img>
            </a>
          </div>
        </li>

        <li className="other-skills-li">
          <div>
            <div className="ee-bar-design"></div>
          </div>
          <div className="card-info">
            <div className="ee-card-header">Electrical Circuitry Skills</div>
            <div className="ee-card-header-description">
              Developed through working with breadboards, soldering tools,
              multimeters and power supplies.
            </div>
            <div className="ee-card-description">Technical Skill</div>
            <div className="bottom-border"></div>
          </div>

          <div>
            <a>
              <img
                alt="image"
                className="education-logo"
                id="communication-skill-logo"
                src={electricBoltLogo}
              ></img>
            </a>
          </div>
        </li>
      </ul>
      <div id="bottom-row-other-skills">
        <div id="buttom-row-skill-override" className="other-skills-li">
          <div>
            <div className="ee-bar-design"></div>
          </div>
          <div className="card-info">
            <div className="ee-card-header">
              Understading of Desktop Components
            </div>
            <div className="ee-card-header-description">
              Developed through building and repairing Desktop PC's.
            </div>
            <div className="ee-card-description">Technical Skill</div>
            <div className="bottom-border"></div>
          </div>

          <div>
            <a>
              <img
                alt="image"
                className="education-logo"
                id="communication-skill-logo"
                src={microchipLogo}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
