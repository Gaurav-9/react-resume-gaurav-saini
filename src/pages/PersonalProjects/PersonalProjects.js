import React from "react";
import "./PersonalProjects.css"
import {useState,useEffect} from "react"
import Project from "./Project"

// IMAGES
import discordLogo from"./Images/discord-brands.svg"
import resumeLogo from"./Images/file-code-regular.svg"

function PersonalProjects() {

  const personalProjectsArray =
  [
      {
        title:"Discord Hangman Bot",
        img:discordLogo,
        description:"It does hangman, with multiple discord user players",
        date:"04 / 2021",
        languages:"Javascript",
      },
      {
        title:"React Portfolio",
        img:resumeLogo,
        description:"A visual repersentative of my react skills along with my employee skills",
        date:"04 / 2021",
        languages:"Javascript, HTML, CSS",
      },
  ]

  const [numOfItems, setNumOfItems] = useState(2)
  const[seeMoreButtonStyle,setSeeMoreButtonStyle] = useState(
    
    {
      text:"Show More"
    }); 

//CREATES PERSONAL PROJECT CARD FOR EACH ELEMENT OF ARRAY
  const listItems = personalProjectsArray.map((project)=>
  {
    return(<Project data={project}/>); 
  })

  

const listItemsDisplayed = listItems.slice(0,numOfItems)

const handleSeeMore = () =>
{

  if(numOfItems<personalProjectsArray.length)
  {
    let temp = numOfItems +1; 
    setNumOfItems(temp); 
    console.log(numOfItems); 
  }

  if(numOfItems>=personalProjectsArray.length)
  {
    let temp = numOfItems -1; 
    setNumOfItems(temp); 
  }

}


useEffect(()=>{
  if(numOfItems>=personalProjectsArray.length)
  {
    setSeeMoreButtonStyle
    ({
      text:"Show Less"
    }); 
    console.log(numOfItems)
  }
  if(numOfItems<personalProjectsArray.length)
  {
    setSeeMoreButtonStyle
    ({
      text:"Show More"
    }); 
    console.log(numOfItems)
  }
},[numOfItems])

  
  return (
    <div id="personal-projects-div">
     <h1>Personal Projects</h1> 
     <div id="home-header-introduction">
       These are some some projects I created in my free time!
      </div>
     <div id="header-bottom-border"></div>
    


      <div className="projects-holder">
        <ul id="projects-ul">{listItemsDisplayed}</ul>
        <div id="see-more-div">
        <button onClick={()=>{handleSeeMore()}} id="see-more-button">{seeMoreButtonStyle.text}</button></div>
      </div>

      

      </div>
  );
}

export default PersonalProjects;
