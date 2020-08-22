import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"

function NavTabs() {
  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>

        <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
          Projects
        </Link>

        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>

        </div>
      </div>
    </nav>

  );
}

export default NavTabs;
