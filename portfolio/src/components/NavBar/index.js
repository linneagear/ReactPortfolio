import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

function NavTabs() {
  const location = useLocation();

  return (
    <>
    <div className="global-nav">
      <Navbar className="container navbar justify-content-between flex-column flex-sm-row ">
        
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <Nav>
          
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
              </Link>

              <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                About
              </Link>

              <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                Projects
              </Link>

              <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
              </Link>

          </Nav>
      </Navbar>
      </div>
    </>
  );
}

export default NavTabs;
