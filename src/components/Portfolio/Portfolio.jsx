import React from 'react';
import './Portfolio.scss';
import ProjectCard from './ProjectCard/ProjectCard';

const Portfolio = () => (
  <>
    <div className="parallax parallaxJS">
      <p className="parallaxText">Evgeny Ivanov</p>
      <p className="parallaxText">Junior Frontend Developer</p>
    </div>
    <div className="gap">
      <div className="gapInner"></div>
    </div>
    <div className="parallax parallaxContent">
      <div className="contentContainer">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  </>
);

export default Portfolio;
