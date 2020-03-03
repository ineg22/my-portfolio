import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';

import './Layout.scss';

import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';

const Layout = () => (
  <div className="container">
    <header className="header">
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
      © Evgeny Ivanov 2020 | &nbsp;
      <Link to="/about">
        <span className="footerText">Contact me</span>
      </Link>
    </footer>
  </div>
);

export default Layout;
