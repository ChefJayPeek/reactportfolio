import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    
    return (
            // setup the navbar
                <nav className="navbar">
                <a className="navbar-brand">Jay Peek</a>
                  <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/"
                  >
                    About
                  </NavLink>
                  <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/portfolio"
                  >
                    Portfolio
                  </NavLink>
                  <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </nav>
              );
};

export default Header;
