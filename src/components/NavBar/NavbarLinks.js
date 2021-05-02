import React from 'react'
import "./NavBar.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faFileExcel } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react"
import {Link} from "react-router-dom"


function NavbarLinks({toggleState,toggleButton}) {

    const [navLinkState,setnavLinkState] = useState({
      state:true,
      style:{width:"400px"}
    }); 

    const handleBurgerButton = () =>
    {
      if(navLinkState.state===true)
      {
        setnavLinkState({
          state:false,
          style:{width:"10px"}
        }); 
      }
      if(navLinkState.state===false)
      {
        setnavLinkState({
          state:true,
          style:{width:"400px"}
        }); 
      }
    }

    


    return (
        <div>
          
           <ul className="headerul">
              <div className="navLinks" style = {navLinkState.style}>

            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/skills">Skills</Link></li>
            <li><Link className="nav-link" to="/personal-projects">Personal Projects</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
            

            </div>
            
              
            <li id="list-with-burger">
              <button id="burger-button" onClick={handleBurgerButton}>
              <div id="circle-icon"><FontAwesomeIcon id="font-awesome-bar" icon={faBars}>
                </FontAwesomeIcon>
              </div>
              </button>
              
            </li>
          </ul> 
         
         
        </div>
    )

}

export default NavbarLinks


