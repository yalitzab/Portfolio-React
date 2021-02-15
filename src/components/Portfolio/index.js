import React, { useState } from 'react';
import Project from '../Project';

function Portfolio(props) {

  const [projects] = useState([
    {
        name: "Run Buddy",
        description: 'HTML/CSS',
        deployLink: "https://yalitzab.github.io/yalitzab.github.io-run-buddy/",
        gitHubRepo: "https://github.com/yalitzab/yalitzab.github.io-run-buddy"
    },
    {
        name: "Bossy Bartender",
        description: 'HTML/CSS',
        deployLink: "http://bossy-bartender.herokuapp.com/",
        gitHubRepo: "https://github.com/yalitzab/bossy-bartender"
    },
    {
        name: "Air Hiker",
        description: 'HTML/CSS',
        deployLink: "https://yalitzab.github.io/air-hiker/",
        gitHubRepo: "https://github.com/yalitzab/air-hiker"
    },
    {
        name: "Budget Tracker",
        description: 'PWA/Node.js',
        deployLink: "https://the-budget-tracker-pwa.herokuapp.com/",
        gitHubRepo: "https://github.com/yalitzab/Budget-Tracker-PWA"
    },
    {
        name: "Portfolio - HTML",
        description: 'HTML/CSS',
        deployLink: "https://yalitzab.github.io/yalitzasportfolio/",
        gitHubRepo: "https://github.com/yalitzab/yalitzasportfolio"
    },
    {
        name: "Note Taker",
        description: 'HTML/CSS/JavaScript',
        deployLink: "https://quiet-hamlet-59341.herokuapp.com/",
        gitHubRepo: "https://github.com/yalitzab/Note-Taker"
    },
    {
        name: "ReadMe Generator",
        description: 'Node.js',
        deployLink: "https://github.com/yalitzab/Professional-README-Generator",
        gitHubRepo: "https://github.com/yalitzab/Professional-README-Generator"
    },
    {
        name: "Daily Work Task",
        description: 'HTML/Javascript',
        deployLink: "https://yalitzab.github.io/daily-work-task/",
        gitHubRepo: "https://github.com/yalitzab/daily-work-task"
    },
    {
        name: "KETOgether",
        description: 'MERN Stack',
        deployLink: "https://ketogether.herokuapp.com/",
        gitHubRepo: "https://github.com/yalitzab/ketogether"
    }
])

  // const { cards } = props;
  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>



    // <div className="row">
    //   {cards.map(card => {
    //     return (
    //       <div className="col-md-3 mb-4">
          
    //           <img src={process.env.PUBLIC_URL + card.imageUrl} className="card-img-top w-100  h-80" alt="..." />
    //           <h3 class="text-justify">{card.name}</h3>
    //           <a class="btn btn-primary ml-5 mt-3" href={card.deployLink} role="button">Deployed</a>
    //           <a class="btn btn-primary ml-5 mt-3" href={card.gitHubRepo} role="button">GitHub</a>
      
    //       </div>
    //     )
    //   })}

    // </div>
  );
}
export default Portfolio;
