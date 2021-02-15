import React from 'react';
import coverImage from '../../assets/cover/coverimage.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Yalitza</h1>
      <img src={coverImage} alt="pastel"></img>
      {props.children}
    </header>
  );
}

export default Header;
