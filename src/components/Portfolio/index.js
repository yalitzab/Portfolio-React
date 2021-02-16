import React, { useState } from 'react';
import Project from '../Project';

function Portfolio(props) {

  const [projects] = useState([
    {
        name: "run-buddy",
        description: 'HTML/CSS',
        link: "https://yalitzab.github.io/yalitzab.github.io-run-buddy/",
        repo: "https://github.com/yalitzab/yalitzab.github.io-run-buddy"
    },
    {
        name: "bossy-bartender",
        description: 'HTML/CSS',
        link: "http://bossy-bartender.herokuapp.com/",
        repo: "https://github.com/yalitzab/bossy-bartender"
    },
    {
        name: "air-hiker",
        description: 'HTML/CSS',
        link: "https://yalitzab.github.io/air-hiker/",
        repo: "https://github.com/yalitzab/air-hiker"
    },
    {
        name: "budget-tracker",
        description: 'PWA/Node.js',
        link: "https://the-budget-tracker-pwa.herokuapp.com/",
        repo: "https://github.com/yalitzab/Budget-Tracker-PWA"
    },
    {
        name: "portfolio-css",
        description: 'HTML/CSS',
        link: "https://yalitzab.github.io/yalitzasportfolio/",
        repo: "https://github.com/yalitzab/yalitzasportfolio"
    },
    {
        name: "note-taker",
        description: 'HTML/CSS/JavaScript',
        link: "https://quiet-hamlet-59341.herokuapp.com/",
        repo: "https://github.com/yalitzab/Note-Taker"
    },
    {
        name: "readme-gen",
        description: 'Node.js',
        link: "https://github.com/yalitzab/Professional-README-Generator",
        repo: "https://github.com/yalitzab/Professional-README-Generator"
    },
    {
        name: "daily-note",
        description: 'HTML/Javascript',
        link: "https://yalitzab.github.io/daily-work-task/",
        repo: "https://github.com/yalitzab/daily-work-task"
    },
    {
        name: "ke-together",
        description: 'MERN Stack',
        link: "https://ketogether.herokuapp.com/",
        repo: "https://github.com/yalitzab/ketogether"
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
    //           <a class="btn btn-primary ml-5 mt-3" href={card.link} role="button">Deployed</a>
    //           <a class="btn btn-primary ml-5 mt-3" href={card.repo} role="button">GitHub</a>
      
    //       </div>
    //     )
    //   })}

    // </div>
  );
}
export default Portfolio;
