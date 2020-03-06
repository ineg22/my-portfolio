import React from 'react';
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
      <div className="contactsBlock">
        <p>Email:</p>
        <a
          href="mailto:ineg22@gmail.com"
          target="_blank"
          className="contactsLink"
        >
          ineg22@gmail.com
        </a>
      </div>
      <div className="contactsBlock">
        <p>Telegram:</p>
        <a href="https://t.me/ineg_xd" target="_blank" className="contactsLink">
          @ineg_xd
        </a>
      </div>
      <div className="contactsBlock">
        <p>Skype:</p>
        <a href="skype:ineg_xd" target="_blank" className="contactsLink">
          @ineg_xd
        </a>
      </div>
      <div className="contactsBlock">
        <p>Github:</p>
        <a
          href="https://github.com/ineg22"
          target="_blank"
          className="contactsLink"
        >
          ineg22
        </a>
      </div>
      <div className="contactsBlock">
        <p>LinkedIn:</p>
        <a
          href="https://www.linkedin.com/in/ineg22/"
          target="_blank"
          className="contactsLink"
        >
          ineg22
        </a>
      </div>
    </div>
  </div>
);

export default About;
