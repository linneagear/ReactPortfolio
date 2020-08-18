import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "./style.css"

function NavTabs() {
  return (
    <Navbar className="navbar">
    <Nav className="mr-auto nav">
      <Nav.Link href="/"className="navbar">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/linnea-gear/"><i
              class="fab fa-linkedin"></i></Nav.Link>
      <Nav.Link href="https://github.com/linneagear"><i class="fab fa-github"></i></Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default NavTabs;
