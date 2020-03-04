import React from 'react';
import fancyWeather from '../../../assets/images/fancyWeather.PNG';
import piskel from '../../../assets/images/piskel.PNG';
import quiz from '../../../assets/images/quiz.PNG';
import repair from '../../../assets/images/repair.PNG';
import cultural from '../../../assets/images/cultural.PNG';
import keyboard from '../../../assets/images/keyboard.PNG';

const ProjectImage = ({ type }) => {
  console.log(type);
  switch (type) {
    case 'Fancy Weather':
      return <img src={fancyWeather} alt={type} />;
    case 'Simple Piskel Clone':
      return <img src={piskel} alt={type} />;
    case 'Songbird Quiz':
      return <img src={quiz} alt={type} />;
    case 'Cultural Portal':
      return <img src={cultural} alt={type} />;
    case 'Repair Design':
      return <img src={repair} alt={type} />;
    case 'Virtual Keyboard':
      return <img src={keyboard} alt={type} />;
    default:
      return <img src={fancyWeather} alt={type} />;
  }
};
export default ProjectImage;
