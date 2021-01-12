import React from 'react';
import coverimage from '../../assets/cover/coverimage.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverimage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        My desired roles are Full-stack web development, Back-end web development, or Freelance. 
        Coming from the workforce solutions industry, I have found web development as new talent 
        and have passion for creativity in HTML, JavaScript to develop fully functional complex code. 
        I have a certificate in Full-Stack Web development from UCLA. The intense robust but rewarding bootcamp 
        program prepared me to develop web applications from the Front-end to the Back-end to provide solutions to businesses and clients. 
        </p>
      </div>
    </section>
  );
}

export default About;
