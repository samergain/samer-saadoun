import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../SamLogo.png";

function NavTabs() {
    const location = useLocation();
    return (
    <nav class="navbar navbar-expand-md navbar-light sticky-top mb-5">
        <img src={Logo} alt="samer logo" class="samer-logo"/>
        <Link to="/" className={"ss"}>
          Samer Saadoun
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                 About Me
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                 Projects
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                 Contact
                </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1MUJ65-Ont1I8T5DEDWMJlh90qguud4d-/view?usp=sharing">Resume</a>
            </li>
          </ul>
        </div>
  </nav>
  );
}

export default NavTabs;