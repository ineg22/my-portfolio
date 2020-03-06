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
      <div className="parallax parallaxJS">
        <div className="mask">
          <div className="parallaxText">
            <p>Evgeny Ivanov</p>
            <p>Junior Frontend Developer</p>
          </div>
        </div>
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
