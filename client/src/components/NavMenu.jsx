import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';

const NavMenu = () => {
  return (
    <div className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="/">
          Home
        </a>
        <a className="navbar-item" href="/quote">
          Random Quote
        </a>
      </div>

      <div className="navbar-end"></div>
      <a className="navbar-item" href="https://joebiden.com/">
        Vote for Biden
      </a>
    </div>
  );
};

export default NavMenu;
