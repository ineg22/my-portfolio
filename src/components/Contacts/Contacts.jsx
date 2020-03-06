import React from 'react';
import { TiSocialSkypeOutline } from 'react-icons/ti';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiMailbox } from 'react-icons/gi';

const Contacts = ({ color }) => (
  <>
    <a href="mailto:ineg22@gmail.com" target="_blank" className="footerLink">
      <GiMailbox color={color} />
    </a>
    <a href="https://t.me/ineg_xd" target="_blank" className="footerLink">
      <FaTelegram color={color} />
    </a>
    <a href="skype:ineg_xd" target="_blank" className="footerLink">
      <TiSocialSkypeOutline color={color} />
    </a>
    <a href="https://github.com/ineg22" target="_blank" className="footerLink">
      <FaGithub color={color} />
    </a>
    <a
      href="https://www.linkedin.com/in/ineg22/"
      target="_blank"
      className="footerLink"
    >
      <FaLinkedin color={color} />
    </a>
  </>
);

export default Contacts;
