import React from "react";
import "./PersonalProjects.css";
import { useState, useEffect } from "react";
import Project from "./Project";

// IMAGES
import discordLogo from "./Images/discord-brands.svg";
import resumeLogo from "./Images/file-code-regular.svg";

function PersonalProjects() {
  const personalProjectsArray = [
    {
      title: "Discord Hangman Bot",
      img: discordLogo,
      date: "01 / 2021",
      description:
        "A Discord bot dedicated to playing the multiplayer game known as Hangman. Programmed using the Discord.js Library.",
      languages: "Javascript",
      githubRepoURL: "https://github.com/Gaurav-9/Hangman-Discord-Bot",
      seeLiveURL:
        "https://discord.com/oauth2/authorize?client_id=810320726439362582&scope=bot",
    },
    {
      title: "React Portfolio",
      img: resumeLogo,
      description:
        "A portfolio created using the React JS Library. Demonstrates use of concepts such as React Hooks, Props, Function Components, Lists, and Routers. ",
      date: "04 / 2021",
      languages: "Javascript, HTML, CSS",
      githubRepoURL: "https://github.com/Gaurav-9/react-resume-gaurav-saini",
      seeLiveURL: "https://gaurav-9.github.io/react-resume-gaurav-saini/",
    },
  ];

  const [numOfItems, setNumOfItems] = useState(2);
  const [seeMoreButtonStyle, setSeeMoreButtonStyle] = useState({
    text: "Show More",
  });

  //CREATES PERSONAL PROJECT CARD FOR EACH ELEMENT OF ARRAY
  const listItems = personalProjectsArray.map((project) => {
    return <Project data={project} />;
  });

  const listItemsDisplayed = listItems.slice(0, numOfItems);

  const handleSeeMore = () => {
    if (numOfItems < personalProjectsArray.length) {
      let temp = numOfItems + 1;
      setNumOfItems(temp);
      console.log(numOfItems);
    }

    if (numOfItems >= personalProjectsArray.length) {
      let temp = numOfItems - 1;
      setNumOfItems(temp);
    }
  };

  useEffect(() => {
    if (numOfItems >= personalProjectsArray.length) {
      setSeeMoreButtonStyle({
        text: "Show Less",
      });
    }
    if (numOfItems < personalProjectsArray.length) {
      setSeeMoreButtonStyle({
        text: "Show More",
        style: { marginBottom: "200px" },
      });
    }
  }, [numOfItems]);

  return (
    <div id="personal-projects-div">
      <h1 id="contact-page-header">Personal Projects</h1>
      <div id="home-header-introduction">
        Have a look at some of my personal programming projects! I strive to
        increase the complexity and creativity of each new creation.
      </div>
      <div id="header-bottom-border"></div>

      <div className="projects-holder">
        <ul id="projects-ul">{listItemsDisplayed}</ul>
        <div id="see-more-div">
          <button
            style={seeMoreButtonStyle.style}
            onClick={() => {
              handleSeeMore();
            }}
            id="see-more-button"
          >
            {seeMoreButtonStyle.text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalProjects;
