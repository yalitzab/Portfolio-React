import React from 'react';

function Footer() {

    const icons = [
      {
        name: "fab fa-github",
        link: "https://github.com/yalitzab"
      },
      {
        name: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/yalitzab?trk=profile-badge"
      },
      {
        name: "fab fa-stack-overflow",
        link: "hhttps://stackoverflow.com/users/13843781/yalitza"
      }
    ]
  
    return (
      <footer className="flex-row px-1">
        {icons.map(icon =>
        (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
        )
          )}
      </footer>
    );
  }



// function Footer() {
//     return (
//         <footer className="my-5 align-text-bottom">
//             <h3 id="footer">Follow me on social media!</h3>
//             <div className="my-2 flex-row">
//                 <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="yalitzab">
//                     <a class="LI-simple-link" href='https://www.linkedin.com/in/yalitzab?trk=profile-badge'>
//                     <img src="./assets/icons/linkedin.png" width="30" height="30"></img>
//                     </a>
//                 </div>
//                 <div>
//                     <a class="LI-simple-link" href='https://github.com/yalitzab'>
//                     <img src="./assets/icons/github.png" width="30" height="30"></img>
//                     </a>
//                 </div>
//                 <div>
//                     <a class="LI-simple-link" href='https://stackoverflow.com/users/13843781/yalitza'>
//                     <img src="./assets/icons/stack.png" width="30" height="30"></img>
//                     </a>
//                 </div>
//             </div>
//         </footer>
//     );
// }

export default Footer;