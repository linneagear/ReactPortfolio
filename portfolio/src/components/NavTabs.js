import React from "react";
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import "./style.css"

function NavTabs() {
  const location = useLocation();

  return (
    <div class="navbar">
    <Nav className="mr-auto ">
    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About
        </Link>
        <Link to="/projects" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Projects
        </Link>
        <Link to="/resume" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Resume
        </Link>
        <Link to="/contact" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>
      <Nav.Link href="https://www.linkedin.com/in/linnea-gear/"><i
              class="fab fa-linkedin"></i></Nav.Link>
      <Nav.Link href="https://github.com/linneagear"><i class="fab fa-github"></i></Nav.Link>
    </Nav>
  </div>
  );
}

export default NavTabs;
