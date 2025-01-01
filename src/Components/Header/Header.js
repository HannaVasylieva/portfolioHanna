import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to="/" className="header__nav-item">
          Home
        </NavLink>
        <NavLink to="/projects" className="header__nav-item">
          Projects
        </NavLink>
        <NavLink to="/get-in-touch" className="header__nav-item">
          Get in Touch
        </NavLink>
      </nav>

      <div className="header__icons">
        <a
          className="header__link"
          href="https://www.linkedin.com/in/hanna-vasylieva-6a2752298/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="header__icon" src="social.png" alt="Linkedin" />
        </a>

        <a
          className="header__link"
          href="https://github.com/HannaVasylieva"
          target="_blank"
          rel="noreferrer"
        >
          <img className="header__icon" src="github.png" alt="Github" />
        </a>
      </div>
    </header>
  );
};

export default Header;
