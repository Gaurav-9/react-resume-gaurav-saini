import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideInfo from "./components/SideInfo/SideInfo"
import {useState} from "react"
import "./components/NavBar/NavBar.css"
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/SkillsWithBootStrap";
import Contact from "./pages/Contact/Contact";
import PersonalProjects from "./pages/PersonalProjects/PersonalProjects";
import NavBar from "./components/NavBar/Navbar";
import { Redirect } from 'react-router-dom';
import Footer from "./components/Footer/Footer"

const App = () => {
  const data = {
    name: "Gaurav Saini",
    ocupation: "Electrical Engineering Student",
    location: {
      city: "Brampton",
      street: "7 Pertosa Drive",
      province: "Ontario",
    },
    contactInfo: {
      phoneNumber: "647-916-8117",
      email: "g22saini@uwaterloo.ca",
    },
  };

  const [sideInfoState,setSideInfoState] = useState(
    {
        state:true,
        sideInfoStyle:{
          width:"280px"
        },
        innerButtonStyle:{},
        outerButtonStyle:{display:"none"}
  }); 

  const handleSideInfoState = () =>
  {
    if(sideInfoState.state ===true)
    {
      setSideInfoState
      ({
       state:false, 
        sideInfoStyle:{
        width:"1px"},
        innerButtonStyle:{
          display:"none"
        },
        outerButtonStyle:{}
        
      }); 
      console.log(sideInfoState.state);                                                        
    }
    if(sideInfoState.state ===false)
    {
      setSideInfoState
      ({
       state:true, 
        sideInfoStyle:{
        width:"280px"
        },
        innerButtonStyle:{},
        outerButtonStyle:{display:"none"}
        }); 
      console.log(sideInfoState.state);                                                        
    }
  }



  return (
    <div>
      

      <div className="flex-container-all">
        <div>
          <SideInfo data={data} state={sideInfoState} handleSideInfoState = {()=>{handleSideInfoState()}}/>
        </div>
        <div style={{width:"100%"}}>
        <Router>
        <NavBar state={sideInfoState} handleSideInfoState ={()=>{handleSideInfoState()}}/>
          <main >
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/skills" exact>
              <Skills />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/personal-projects" exact>
              <PersonalProjects />
            </Route>
            <Route render={() => <Redirect to={{pathname: "/"}} />} />
          </main>
          <Footer />
        </Router>
        
        </div>
      </div>
    </div>
  );
};

export default App;
