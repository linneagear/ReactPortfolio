import React from "react";
import { Card, Container } from 'react-bootstrap';
import "./projects.css";
import image from "../../images/goals.png"
// import image2 from "../../images/moveme.png"
// import image3 from "../../images/completedHTML.png"
// import image4 from "../../images/Capture.PNG"
// import image5 from "../../images/scheduler.PNG"
// import image6 from "../../images/notes.png"


function Projects(props) {
  return (
    <Container>
     
      <div class="projectCard" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body >
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.info}
          </Card.Text>
          <button type="button" class="btn btn-outline-info" href={props.website}>Website</button>
          <button type="button" class="btn btn-outline-info" href={props.github}>Repo</button>
          </Card.Body>
        </div>
      
</Container>

    //   <Row>
    //   <div class="projectCard" style={{ width: '20rem' }}>
    //       <Card.Img variant="top" src={image} />
    //       <Card.Body >
    //         <Card.Title>Wellyes App</Card.Title>
    //         <Card.Text>
    //           The wellyes app is a helpful tool to track different goals by the user's choice, to help with their
    //           mental health.
    //       </Card.Text>
    //       <button type="button" class="btn btn-outline-info" href="https://glacial-meadow-97517.herokuapp.com/">Website</button>
    //       <button type="button" class="btn btn-outline-info" href="https://github.com/linneagear/the-a-team-project-2">Repo</button>
    //       </Card.Body>
    //     </div>

    //     <div class="projectCard" style={{ width: '20rem' }}>
    //       <Card.Img variant="top" src={image2} />
    //       <Card.Body>
    //         <Card.Title>Moving App</Card.Title>
    //         <Card.Text>
    //           The MoveMe app is a helpful tool for finding movers, storage, or where to rent a truck in your area.
    //        </Card.Text>
    //        <button type="button" class="btn btn-outline-info" href="https://move-me-by-glass.netlify.app/">Website</button>
    //        <button type="button" class="btn btn-outline-info" href="https://github.com/Dayman628/move-me">Repo</button>
    //       </Card.Body>
    //     </div>

    //     <div class="projectCard" style={{ width: '20rem' }}>
    //       <Card.Img variant="top" src={image3} />
    //       <Card.Body>
    //         <Card.Title>Template Engine</Card.Title>
    //         <Card.Text>
    //           This application is a software engineering team generator command line application. The application
    //           will prompt the user for information about the team manager and then information about the team
    //           members.
    //        </Card.Text>
    //        <button type="button" class="btn btn-outline-info" href="https://www.youtube.com/watch?v=1m_SW-wQEZY&feature=youtu.be">Video Demo</button>
    //        <button type="button" class="btn btn-outline-info" href="https://github.com/linneagear/templateEngine">Repo</button>
    //       </Card.Body>
    //     </div>

    //   </Row>

    //   <Row>

    //   <div class="projectCard" style={{ width: '20rem' }}>
    //       <Card.Img variant="top" src={image4} />
    //       <Card.Body>
    //         <Card.Title>Burger App</Card.Title>
    //         <Card.Text>
    //         This application is a burger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM.
    //               It
    //               follows an MVC design pattern and uses Node and MySQL to query and route data, and Handlebars to
    //               generate
    //               the HTML.
    //         </Card.Text>
    //         <button type="button" class="btn btn-outline-info" href="https://agile-shelf-65251.herokuapp.com/">Website</button>
    //         <button type="button" class="btn btn-outline-info" href="https://github.com/linneagear/burger">Repo</button>
    //       </Card.Body>
    //     </div>

    //     <div class="projectCard" style={{ width: '20rem' }}>
    //       <Card.Img variant="top" src={image5} />
    //       <Card.Body>
    //         <Card.Title>Work Day Scheduler</Card.Title>
    //         <Card.Text>
    //         This work day scheduler allows the user to enter events into each time slot, and save that event for
    //               when
    //               they next use it.
    //         </Card.Text>
    //         <button type="button" class="btn btn-outline-info" href="https://linneagear.github.io/WorkDayScheduler/">Website</button>
    //         <button type="button" class="btn btn-outline-info" href="https://github.com/linneagear/WorkDayScheduler">Repo</button>
    //       </Card.Body>
    //     </div>

    //     <div class="projectCard" style={{ width: '20rem' }}>
    //       <Card.Img variant="top" src={image6} />
    //       <Card.Body>
    //         <Card.Title>Note Taker</Card.Title>
    //         <Card.Text>
    //         This application creates and saves notes, allows you to view previously created notes, and deletes
    //               notes.
    //         </Card.Text>
    //         <button type="button" class="btn btn-outline-info" href="https://morning-dusk-54935.herokuapp.com/">Website</button>
    //         <button type="button" class="btn btn-outline-info" href="https://github.com/linneagear/NoteTaker">Repo</button>
    //       </Card.Body>
    //     </div>

    //   </Row>

    // </Container>
  );
}

export default Projects;
