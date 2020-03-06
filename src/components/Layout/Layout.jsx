import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { TiSocialSkypeOutline } from 'react-icons/ti';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiMailbox } from 'react-icons/gi';

import './Layout.scss';

import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';

const Layout = () => (
  <div className="container">
    <header className="header">
      <div className="headerGap"></div>
      <nav className="nav">
        <ul className="navList">
          <li className="navItem">
            <NavLink to="/" activeClassName="selected" exact>
              <span className="navItemText">Portfolio</span>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/about" activeClassName="selected">
              <span className="navItemText">About</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main className="main">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Portfolio />
        </Route>
      </Switch>
    </main>
    <footer className="footer">
      © Evgeny Ivanov 2020 &nbsp;|<span>&nbsp; Contact me: &nbsp;</span>
      <a href="mailto:ineg22@gmail.com" target="_blank" className="footerLink">
        <GiMailbox color="white" />
      </a>
      <a href="https://t.me/ineg_xd" target="_blank" className="footerLink">
        <FaTelegram color="white" />
      </a>
      <a href="skype:ineg_xd" target="_blank" className="footerLink">
        <TiSocialSkypeOutline color="white" />
      </a>
      <a
        href="https://github.com/ineg22"
        target="_blank"
        className="footerLink"
      >
        <FaGithub color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/ineg22/"
        target="_blank"
        className="footerLink"
      >
        <FaLinkedin color="white" />
      </a>
    </footer>
  </div>
);

export default Layout;
