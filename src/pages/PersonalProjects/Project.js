import React from "react";
import "./Project.css";
import githubLogo from "./Images/github-brands.svg";

function Project({ data }) {
  return (
    <li id="project-li">
      <div id="project-div">
        <div id="project-info">
          <div id="date-box">{data.date}</div>
          <div id="project-title">{data.title}</div>
          <div id="languages-div">{data.languages}</div>
          <div  id="githubsrc" className="social-circle">
            <a href="https://github.com/Gaurav-9">
              <div className="circle-fill">
                <img alt="image" className="all-logos" src={githubLogo}></img>
              </div>
            </a>
          </div>
        </div>
        <div id="img-description-div">
          <img alt="image" src={data.img} id="project-image"></img>
          <div id="description-see-more-holder">
          <div id="project-description">{data.description}</div>
          <div id="see-live-button">See Live</div>
          </div>
        </div>
      </div>

      <div id="bottom-bar-pp-design"></div>
    </li>
  );
}

export default Project;
