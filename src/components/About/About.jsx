import React from 'react';
import Contacts from '../Contacts/Contacts';
import './About.scss';

const About = () => (
  <div className="aboutContainer">
    <h2 className="aboutHeader">Evgeny Ivanov</h2>
    <h2 className="aboutHeader">Thanks for visiting</h2>
    <p className="aboutText">
      Hello there! My name is Evgeny Ivanov and I'm a beginner developer from
      Minsk, Belarus. I have a passion for creating beautiful, interactive, and
      highly crafted solutions based on modern technologies. I'm studying full
      time at the moment, learning React, Redux and Typescript, as I am planning
      to work with this technology stack further.
    </p>
    <p className="aboutText">
      My portfolio is a mix of works created during my half-year journey in the
      Rolling Scopes School. At the time being I'm looking forward to new
      opportunities, so if your company is seeking for an enthusiastic
      developer, please feel free to contact me.
    </p>
    <div className="contactsContainer">
      <Contacts color="4d90fe" />
    </div>
  </div>
);

export default About;
