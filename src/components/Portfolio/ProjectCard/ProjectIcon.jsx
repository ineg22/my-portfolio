import React from 'react';
import { WiDayFog } from 'react-icons/wi';
import { DiCode } from 'react-icons/di';
import { GiComputing } from 'react-icons/gi';
import {
  GiTerror,
  GiEmptyChessboard,
  GiKeyboard,
  GiUltrasound,
  GiBookshelf,
} from 'react-icons/gi';

const ProjectIcon = ({ type, children }) => {
  switch (type) {
    case 'Fancy Weather':
      return <WiDayFog className="icon">{children}</WiDayFog>;
    case 'Simple Piskel Clone':
      return <GiEmptyChessboard className="icon">{children}</GiEmptyChessboard>;
    case 'Songbird Quiz':
      return <GiUltrasound className="icon">{children}</GiUltrasound>;
    case 'Cultural Portal':
      return <GiBookshelf className="icon">{children}</GiBookshelf>;
    case 'Repair Design':
      return <DiCode className="icon">{children}</DiCode>;
    case 'Virtual Keyboard':
      return <GiKeyboard className="icon">{children}</GiKeyboard>;
    case 'Datagrid':
      return <GiComputing className="icon">{children}</GiComputing>;
    default:
      return <GiTerror className="icon">{children}</GiTerror>;
  }
};

export default ProjectIcon;
