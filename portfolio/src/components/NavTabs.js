import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function NavTabs() {


  return (
    <Navbar>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/linnea-gear/"><i
              class="fab fa-linkedin"></i></Nav.Link>
      <Nav.Link href="https://github.com/linneagear"><i class="fab fa-github"></i></Nav.Link>
    </Nav>

  </Navbar>
  );
}

export default NavTabs;
