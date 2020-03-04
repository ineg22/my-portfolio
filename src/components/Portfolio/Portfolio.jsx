import React from 'react';
import './Portfolio.scss';
import ProjectCard from './ProjectCard/ProjectCard';

import projectData from '../../Bll/projectData.json';

const Portfolio = () => {
  const projects = projectData.map(projectData => (
    <ProjectCard description={projectData} />
  ));
  return (
    <>
      <div className="gapInner"></div>
      <div className="parallax parallaxJS">
        <p className="parallaxText">Evgeny Ivanov</p>
        <p className="parallaxText">Junior Frontend Developer</p>
      </div>
      <div className="gap">
        <div className="gapInner"></div>
      </div>
      <div className="parallax parallaxContent">
        <div className="contentContainer">{projects}</div>
      </div>
    </>
  );
};
export default Portfolio;
