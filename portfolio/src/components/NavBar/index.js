import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Resume from "../Resume"
import "./style.css";

function NavTabs() {
  const location = useLocation();

  return (
    <>
    {/* make sticky navbar to stay at top */}
    <div className="global-nav">
      <Navbar fixed="top" className="container navbar justify-content-between flex-column flex-sm-row ">
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
            <Resume />
          </Nav>
      </Navbar>
      </div>
    </>
  );
}

export default NavTabs;
