import React,{useEffect} from "react";
import "./NavBar.css";
import NavbarLinks from './NavbarLinks'
import toggleSideBarLogo from "./arrows-alt-h-solid.svg"




function Navbar({state,handleSideInfoState}) {


  return (
      <div>
        <header className="flex-container">
        <button id="toggle-side-info-button"  onClick={handleSideInfoState}>
       <div className="circle-fill" id="toggle-side-info-cicle">
          <img  alt ="image" id="toggle-sideinfo-button" className="all-logos" src={toggleSideBarLogo}></img>
          </div>
       </button>
          <NavbarLinks />
        </header>
        <section>
        </section>
      </div>
  ); 
}

export default Navbar;


   
  

