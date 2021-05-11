import React from "react";
import "./Footer.css";
import githubLogo from "./Images/github-brands.svg";
import linkedinLogo from "./Images/linkedin-brands.svg";
import twitterLogo from "./Images/twitter-brands.svg";
import reactLogo from "./Images/reactjs-icon.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="footer-main-div">
      <div id="navigate-div">
        <div id="navigation-footer-header">Navigation</div>
        <ul id="navigation-footer-ul">
          <li className="navigation-footer-li">
            <Link className="footer-navLinks" to="/">
              Home
            </Link>
          </li>
          <li className="navigation-footer-li">
            <Link className="footer-navLinks" to="/skills">
              Skills
            </Link>
          </li>
          <li className="navigation-footer-li">
            <Link className="footer-navLinks" to="/personal-projects">
              Personal Projects
            </Link>
          </li>
          <li className="navigation-footer-li">
            <Link className="footer-navLinks" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* START OF SOCIAL CIRCLES */}
      <div id="follow-me-sign-div">
        <div id="follow-me-sign-div-header">Social Media</div>
        <ul id="social-circles">
          <li className="social-circle">
            <a href="https://github.com/Gaurav-9">
              <div className="circle-fill">
                <img alt="image" className="all-logos" src={githubLogo}></img>
              </div>
            </a>
          </li>

          <li className="social-circle">
            <a href="https://www.linkedin.com/in/gauravsuw/">
              <div className="circle-fill">
                <img
                  alt="image"
                  className="all-logos"
                  id="linkedin-logo"
                  src={linkedinLogo}
                ></img>
              </div>
            </a>
          </li>
          <li className="social-circle">
            <div className="circle-fill">
              <img alt="image" className="all-logos" src={twitterLogo}></img>
            </div>
          </li>
        </ul>

        <div id="resume-name-signature">
          Created By @Gaurav Saini<br></br> Powered by React{" "}
          <img alt="image" id="react-logo" src={reactLogo}></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
