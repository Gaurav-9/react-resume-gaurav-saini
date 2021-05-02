import React from "react";

import "./SideInfo.css";
// IMPORTED LOGOS
import githubLogo from "./Images/github-brands.svg"
import linkedinLogo from "./Images/linkedin-brands.svg"
import twitterLogo from "./Images/twitter-brands.svg"
import pfp from "./Images/MeliodasPFP.png";
import downloadLogo from "./Images/download-solid.svg"
import contactLogo from "./Images/address-card-regular.svg"
import toggleSideBarLogo from "./Images/arrows-alt-h-solid.svg"
import laptopLogo from "./Images/laptop-solid.svg"
import javascriptLogo from "./Images/js-square-brands.svg"
import htmlLogo from "./Images/html5-brands.svg"
import cppLogo from "./Images/C++-595b40b75ba036ed117d5b19.svg"
//IMPORT RESUME
import myResume from "./Images/GauravSaini.pdf"




function SideInfo({state,handleSideInfoState,data}) {
  return (


    <div className="side-info-main" style={state.sideInfoStyle}>
      {/* TOGGLE SIDE INFO BUTTON */}
      {/* <div id="toggle-side-info-div">

       <button id="toggle-side-info-button" style={state.innerButtonStyle} onClick={handleSideInfoState}>
       <div className="circle-fill">
          <img  alt ="image" className="all-logos" src={toggleSideBarLogo}></img>
          </div>
       </button>

      </div> */}


      {/*  PROFILE PICTURE*/}
      <div id="pfpdiv">
        <img id="pfp" alt="image" src={pfp} height="100px" width="100px"></img>
      </div>

      {/*  NAME */}
      <div id="name">{data.name} </div>

      {/* OCUPATION PILL */}
      <div id="ocupation-pill">
        <div>{data.ocupation}</div>
      </div>


      {/* LIST OF SOCIALS */}
      <ul id="social-circles">


        <li className="social-circle">
          <a href="https://github.com/Gaurav-9">
          <div className="circle-fill">
          <img  alt ="image" className="all-logos" src={githubLogo}></img>
          </div>
          </a>
        </li>

        <li className="social-circle">
        <a href="https://www.linkedin.com/in/gauravsuw/">
        <div className="circle-fill">
          <img  alt ="image" className="all-logos" id="linkedin-logo" src={linkedinLogo}></img>
          </div>
        </a>
        </li>
        <li className="social-circle">
        <div className="circle-fill">
          <img  alt ="image" className="all-logos" src={twitterLogo}></img>
          </div>
        </li>
      </ul>

      {/* CONTACT INFO */}
      
    <div id="contact-info">
      <div id="contact-logo-div"><img alt="image" id="contact-logo" src={contactLogo}></img></div>Contact Information
    </div>
    
    <div id="contact-info-textbox">
    
    <br></br>
    <ul id="contact-info-ul">
    <li className="contact-info-li">Email: {data.contactInfo.email}</li>
    <li className="contact-info-li">Phone: {data.contactInfo.phoneNumber}</li>
    <li className="contact-info-li">Student # : 20886069</li>
    <li className="contact-info-li">Location: {data.location.city}, {data.location.province}</li>
    </ul>
    </div>

      

      {/* PROGRAMMING LANGUAGES */}
      
      <div id="programming-languages-header">
      <div id="contact-logo-div"><img alt="image" id="contact-logo" src={laptopLogo}></img></div>Programming Languages
    </div>

       
          <div id="programming-language-pill">
            <img alt="image" className="language-logo" src={javascriptLogo}></img>
            <div>
              <div className="programming-language-header">Javascript</div>
                <div className="programming-language-description">Worked with Libraries such as Discord.js and React</div>
              </div>
          </div>

          <div id="programming-language-pill">
            <img alt="image" className="language-logo" src={htmlLogo}></img>
            <div>
              <div className="programming-language-header">HTML</div>
                <div className="programming-language-description">Developed through React Web Development</div>
              </div>
          </div>

          <div id="programming-language-pill">
            <img  alt="image" className="language-logo" id="cpp-logo"src={cppLogo}></img>
            <div>
              <div className="programming-language-header">C++</div>
                <div className="programming-language-description">Taught through university level courses and personal projects</div>
              </div>
          </div>
        
       

      

      {/* DOWNLOAD RESUME BUTTON */}
      <a href={myResume} download="GauravSaini.pdf" style={{textDecoration:"none"}}>
      <div id="download-button">
      <img  alt ="image" src={downloadLogo} id="download-button-logo"></img> <div>DOWNLOAD RESUME</div>
      </div>
      </a>







    </div>
  );
}

export default SideInfo;
