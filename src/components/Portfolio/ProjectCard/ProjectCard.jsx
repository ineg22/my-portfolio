import React from 'react';
import Modal from 'react-modal';

import ProjectIcon from './ProjectIcon';
import ProjectImage from './ProjectImage';
import './ProjectCard.scss';
Modal.setAppElement('#root');

const ProjectCard = ({ description }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {
    name,
    sourceUrl,
    taskUrl,
    hostingUrl,
    features,
    shortDescription,
  } = description;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const featureList = features.map(feature => (
    <li className="projectFeature">{feature}</li>
  ));

  return (
    <>
      <button onClick={openModal} className="projectCard">
        {name.toUpperCase()}
        <ProjectIcon type={name} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={`${name} Modal`}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        shouldFocusAfterRender
      >
        <button className="closeButton" onClick={closeModal}>
          🗙
        </button>
        <div className="projectDescription">
          <h2 className="projectName">{name}</h2>
          <hr />
          <p className="projectHostingUrl">
            <a href={hostingUrl} target="_blank">
              <span className="linkText">{hostingUrl}</span>
            </a>
          </p>
          <hr />
          <p className="projectShortDescription">{shortDescription}</p>
          <ul className="projectFeatureList">
            Used technologies: {featureList}
          </ul>
          <hr />
          <p className="projectSourceUrl">
            <a href={sourceUrl} target="_blank">
              <span className="linkText">source code</span>
            </a>
          </p>
          <hr />
          <p className="projectTaskUrl">
            <a href={taskUrl} target="_blank">
              <span className="linkText">specification</span>
            </a>
          </p>
          <hr />
        </div>
        <div className="imgContainer">
          <a href={hostingUrl}>
            <ProjectImage type={name} />
          </a>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
