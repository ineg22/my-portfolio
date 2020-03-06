import React from 'react';
import { TiSocialSkypeOutline } from 'react-icons/ti';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiMailbox } from 'react-icons/gi';

const Contacts = () => (
  <>
    <a href="mailto:ineg22@gmail.com" target="_blank">
      <GiMailbox />
    </a>
    <a href="https://t.me/ineg_xd" target="_blank">
      <FaTelegram />
    </a>
    <a href="skype:ineg_xd" target="_blank">
      <TiSocialSkypeOutline />
    </a>
    <a href="https://github.com/ineg22" target="_blank">
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/ineg22/" target="_blank">
      <FaLinkedin />
    </a>
  </>
);

export default Contacts;
