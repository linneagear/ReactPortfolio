import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Pdf from "../../Documents/resume.pdf";
import "./style.css";

function NavTabs() {
  const location = useLocation();

  return (
    <>
      <div className="global-nav">
        <Navbar className="container navbar justify-content-end flex-column flex-sm-row ">
          <Nav>

            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
              </Link>

            <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
              Projects
              </Link>

            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact
              </Link>
            <a className="resume-button" href={Pdf} target="_blank">Resume</a>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}

export default NavTabs;
