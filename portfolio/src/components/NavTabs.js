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

        <Link to="../Linnea_Gear_Resume.pdf" className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
          Resume
        </Link>

        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>

        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/in/linnea-gear/" className ="nav-link active"><i
          class="fab fa-linkedin"></i></Link>

        {/* GitHub */}
        <Link href="https://github.com/linneagear" className ="nav-link active"><i class="fab fa-github"></i></Link>

        </div>
      </div>
    </nav>

  );
}

export default NavTabs;
