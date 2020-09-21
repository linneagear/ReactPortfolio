import React from "react";
import { Card } from 'react-bootstrap';
import "./style.css";
import image from "../../../images/goals.png"
import image2 from "../../../images/moveme.png"
import image3 from "../../../images/completedHTML.png"
import image4 from "../../../images/Capture.PNG"
import image5 from "../../../images/scheduler.PNG"
import image6 from "../../../images/budgetTracker.jpg"

function Projects() {
  return (
    <div class="container">
      <p className="title">Projects</p>
      <hr class="divider"></hr>

      <div class="row">

        <div class="col">
          <div class="projectCard" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body >
              <Card.Title className="cardTitle">Wellyes App</Card.Title>
              <Card.Text>
                The wellyes app is a helpful tool to track different goals by the user's choice, to help with their
                mental health.
          </Card.Text>
              <a type="button" class="btn btn-outline-info" href="https://glacial-meadow-97517.herokuapp.com/">Website</a>
              <a type="button" class="btn btn-outline-info" href="https://github.com/linneagear/the-a-team-project-2">Repo</a>
            </Card.Body>
          </div>
        </div>

        <div class="col">
          <div class="projectCard" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title className="cardTitle">Moving App</Card.Title>
              <Card.Text>
                The MoveMe app is a helpful tool for finding movers, storage, or where to rent a truck in your area.
           </Card.Text>
              <a class="btn btn-outline-info" href="https://move-me-by-glass.netlify.app/">Website</a>
              <a type="button" class="btn btn-outline-info" href="https://github.com/Dayman628/move-me">Repo</a>
            </Card.Body>
          </div>
        </div>

        <div class="col">
          <div class="projectCard" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title className="cardTitle">Template Engine</Card.Title>
              <Card.Text>
                This application is a software engineering team generator command line application. The application
                will prompt the user for information about the team manager and then information about the team
                members.
           </Card.Text>
              <a type="button" class="btn btn-outline-info" href="https://www.youtube.com/watch?v=1m_SW-wQEZY&feature=youtu.be">Video Demo</a>
              <a type="button" class="btn btn-outline-info" href="https://github.com/linneagear/templateEngine">Repo</a>
            </Card.Body>
          </div>
        </div>
      </div>


      <div class="row">

        <div class="col">
          <div class="projectCard" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title className="cardTitle">Burger App</Card.Title>
              <Card.Text>
                This application is a burger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM.
                It
                follows an MVC design pattern and uses Node and MySQL to query and route data, and Handlebars to
                generate
                the HTML.
            </Card.Text>
              <a type="button" class="btn btn-outline-info" href="https://agile-shelf-65251.herokuapp.com/">Website</a>
              <a type="button" class="btn btn-outline-info" href="https://github.com/linneagear/burger">Repo</a>
            </Card.Body>
          </div>
        </div>

        <div class="col">
          <div class="projectCard" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image5} />
            <Card.Body>
              <Card.Title className="cardTitle">Work Day Scheduler</Card.Title>
              <Card.Text>
                This work day scheduler allows the user to enter events into each time slot, and save that event for
                when
                they next use it.
            </Card.Text>
              <a type="button" class="btn btn-outline-info" href="https://linneagear.github.io/WorkDayScheduler/">Website</a>
              <a type="button" class="btn btn-outline-info" href="https://github.com/linneagear/WorkDayScheduler">Repo</a>
            </Card.Body>
          </div>
        </div>

        <div class="col">
          <div class="projectCard" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image6} />
            <Card.Body>
              <Card.Title className="cardTitle">PWA Budget Tracker</Card.Title>
              <Card.Text>
                This Budget tracker allows the user to be able to add expenses and deposits to their budget with or without a connection.
                  </Card.Text>
              <a type="button" class="btn btn-outline-info" href="https://aqueous-thicket-75974.herokuapp.com/">Website</a>
              <a type="button" class="btn btn-outline-info" href="https://github.com/linneagear/PWA_BudgetTracker">Repo</a>
            </Card.Body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
