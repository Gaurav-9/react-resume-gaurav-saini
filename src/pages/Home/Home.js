import React from "react";
import "./home.css";
import "./interests.css";
import highschoolLogo from "./images/npssLogo.png";
import universityLogo from "./images/waterlooLogo.png";
import company2 from "./images/lowesLogo.png";
import company3 from "./images/dozrLogo.jpg";
import company1 from "./images/vexLogo.jfif";
import desktopLogo from "./images/desktop-solid.svg";

import interest1 from "./images/klipartz.com.png";
import interest2 from "./images/plane-departure-solid.svg";
import interest3 from "./images/calculator-solid.svg";
import interest4 from "./images/skateboard.png";

function Home() {
  return (
    <div id="home-div">
      {/* HEADER */}
      <h3 id="home-header">Hello, I'm Gaurav!</h3>
      <div id="home-header-introduction">
        I'm an electrical engineering student from the University of Waterloo
        and I am excited and egar to learn! Please feel free to explore my
        portfolio.
      </div>
      <div id="header-bottom-border"></div>
      {/* END OF HEADER */}

      <div id="experience-education-holder">
        <div className="experience-education-div">
          {" "}
          {/* EDUCATION HOLDER */}
          <div className="experience-education-header">Education</div>
          <ul className="experience-education-ul">
            <li className="experience-education-li">
              <div>
                <div className="ee-bar-design"></div>
              </div>
              <div className="card-info">
                <div className="date-pill">2020-2025</div>
                <div className="ee-card-header">University of Waterloo</div>
                <div className="ee-card-header-description">University</div>
                <div className="ee-card-description">
                  Honours Electrical Engineering with CO-OP Program
                </div>
                <div className="bottom-border"></div>
              </div>
              <div>
                <a>
                  <img
                    alt="image"
                    className="education-logo"
                    id="waterlooLogo"
                    src={universityLogo}
                  ></img>
                </a>
              </div>
            </li>
            <li className="experience-education-li">
              <div>
                <div className="ee-bar-design"></div>
              </div>
              <div className="card-info" id="card-info-npss">
                <div className="date-pill">2016-2020</div>
                <div className="ee-card-header">
                  North Park Secondary School
                </div>
                <div className="ee-card-header-description">Highschool</div>
                <div className="ee-card-description">
                  Graduated with Honours and the Engineering Award
                </div>
                <div className="bottom-border"></div>
              </div>
              <div>
                <img
                  alt="image"
                  className="education-logo"
                  id="npss-logo"
                  src={highschoolLogo}
                ></img>
              </div>
            </li>
          </ul>
        </div>{" "}
        {/*END OF EDUCATION HOLDER*/}
        <div className="experience-education-div">
          {/*EXPERIENCE HOLDER*/}
          <div className="experience-education-header">Work Experience</div>
          <ul className="experience-education-ul">
            <li className="experience-education-li">
              <div>
                <div className="ee-bar-design"></div>
              </div>
              <div className="card-info">
                <div className="date-pill">2021-2021</div>
                <div className="ee-card-header">DOZR</div>
                <div className="ee-card-header-description">
                  E-Commerce Construction Rentals Company
                </div>
                <div className="ee-card-description">
                  Quality Assurance Engineer
                </div>
                <div className="bottom-border"></div>
              </div>

              <div>
                <a>
                  <img
                    alt="image"
                    className="education-logo"
                    id="dozr-logo"
                    src={company3}
                  ></img>
                </a>
              </div>
            </li>
            <li className="experience-education-li">
              <div>
                <div className="ee-bar-design"></div>
              </div>
              <div className="card-info">
                <div className="date-pill">2016-2020</div>
                <div className="ee-card-header">Robotics Club</div>
                <div className="ee-card-header-description">
                  Robotics Engineering and Competition
                </div>
                <div className="ee-card-description">Club Executive</div>
                <div className="bottom-border"></div>
              </div>
              <div>
                <a>
                  <img
                    alt="image"
                    className="education-logo"
                    id="vex-logo"
                    src={company1}
                  ></img>
                </a>
              </div>
            </li>
            <li className="experience-education-li">
              <div>
                <div className="ee-bar-design"></div>
              </div>
              <div className="card-info">
                <div className="date-pill">2020-2020</div>
                <div className="ee-card-header">Lowes</div>
                <div className="ee-card-header-description">
                  Retail Home Improvement Company
                </div>
                <div className="ee-card-description">
                  Customer Service Repersenative and Cashier
                </div>
                <div className="bottom-border"></div>
              </div>
              <div>
                <a>
                  <img
                    alt="image"
                    className="education-logo"
                    id="lowes-logo"
                    src={company2}
                  ></img>
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/*END OF EXPERIENCE HOLDER*/}
      </div>
      <div id="bottom-border2"></div>
      <div id="interests-holder">
        {/*START OF INTERESTS*/}
        <div id="interests-heading">Interests and Hobbies</div>
        <div id="interest-card-holder-row">
          <div style={{ display: "flex" }}>
            <div id="interest-bar-design"></div>
            <div>
              <div id="interest-pill">
                <img
                  alt="image"
                  className="interest-logo"
                  src={interest1}
                ></img>
                <div>
                  <div className="interest-header">
                    PC Building and Desktop Solutions
                  </div>
                  <div className="interest-header-description">
                    From Lego's to computer components, I have always enjoyed
                    engineering machines
                  </div>
                </div>
              </div>

              <div id="interest-pill">
                <img
                  alt="image"
                  className="interest-logo"
                  id="plane-logo"
                  src={interest2}
                ></img>
                <div>
                  <div className="interest-header">Traveling</div>
                  <div className="interest-header-description">
                    Exploring new places and cultures has always been a great
                    passion of mine!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div id="interest-bar-design"></div>
            <div>
              <div id="interest-pill">
                <img
                  alt="image"
                  className="interest-logo"
                  id="calulator-logo"
                  src={interest3}
                ></img>
                <div>
                  <div className="interest-header">Mathematics</div>
                  <div className="interest-header-description">
                    Mathematical problems are like mysteries that require
                    critical thinking and reasoning to solve.s
                  </div>
                </div>
              </div>
              <div id="interest-pill">
                <img
                  alt="image"
                  className="interest-logo"
                  id="skate-board"
                  src={interest4}
                ></img>
                <div>
                  <div className="interest-header">Skateboarding</div>
                  <div className="interest-header-description">
                    I have recently developed a love for skateboarding and it is
                    now my favoured form of transportation!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
