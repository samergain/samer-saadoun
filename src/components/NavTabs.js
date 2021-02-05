import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../SamLogo.png";

function NavTabs() {
    const location = useLocation();
    return (
    <nav className="navbar navbar-expand-md navbar-light sticky-top mb-5">
        <img src={Logo} alt="samer logo" className="samer-logo"/>
        <Link to="/samer-saadoun" className={"ss"}>
          Samer Saadoun
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link to="/samer-saadoun/about" className={location.pathname === "/samer-saadoun/about" ? "nav-link active" : "nav-link"}>
                 About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/samer-saadoun/projects" className={location.pathname === "/samer-saadoun/projects" ? "nav-link active" : "nav-link"}>
                 Projects
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/samer-saadoun/contact" className={location.pathname === "/samer-saadoun/contact" ? "nav-link active" : "nav-link"}>
                 Contact
                </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1MUJ65-Ont1I8T5DEDWMJlh90qguud4d-/view?usp=sharing">Resume</a>
            </li>
          </ul>
        </div>
  </nav>
  );
}

export default NavTabs;