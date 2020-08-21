import React from "react";
import "./about.css";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Container>
      <p class="about">About</p>
      <br></br>
      <hr class="line"></hr>
      <br></br>
      <p>What started off as a hobby quickly
      built
      into
      a
      true passion of mine and I went
      from
        playing with HTML here and there, to building apps and websites.</p>

      <p>I am a recent graduate of University of Arizona's Coding Bootcamp.</p>

    <br></br>
      <h3>Front-end Developer</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React.js</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>Github</li>
      
      <br></br>
      <h3>Back-end Developer</h3>
        <li>Node.js</li>
        <li>SQL</li>
        <li>MondoDB</li>
        <li>Express.js</li>
    <br></br>
    </Container>
  );
}

export default About;