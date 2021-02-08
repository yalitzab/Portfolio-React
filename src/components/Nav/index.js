import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    setCurrentCategory,
    currentCategory,
    categories,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="https://yalitzab.github.io/Portfolio-React/">
           Yalitza
        </a>
      </h2>
      <nav style={{float: "right"}}>
        <ul className="d-flex flex-row">
          <li className={`mx-2 ${currentCategory.name==="about" && 'navActive'}`} onClick={()=> setCurrentCategory(categories[0])}>
            <a data-testid="about">
              About me
            </a>
          </li>
          <li className={`mx-2 ${currentCategory.name==="contact" && 'navActive'}`} onClick={()=> setCurrentCategory(categories[1])}>
            <span>Contact</span>
          </li>
          <li className={`mx-2 ${currentCategory.name==="portfolio" && 'navActive'}`}  onClick={()=> setCurrentCategory(categories[2])}>
            <span >Portfolio</span>
          </li>
          <li className={`mx-2 ${currentCategory.name==="resume" && 'navActive'}`}  onClick={()=> setCurrentCategory(categories[3])}>
            <span >Resume</span>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
