import React from "react";
import "./style.css";
import image from "../../../images/driverkick.JPG"
import image2 from "../../../images/goals.png"
import image3 from "../../../images/burger.PNG"
import image4 from "../../../images/budgetTracker.jpg"
import image5 from "../../../images/moveme.png"
import image6 from "../../../images/completedHTML.png"

function Projects() {
  return (
    <div className="container">
      <section className="projects">

        <p className="title">Projects</p>
        <hr className="divider" />

        {/* First project row */}

        <div className="row">
          <div class="col-md-6 col-sm-12 col-xs-12 projectCard">
            <div class="card" >
              <img src={image} className="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Driverkick</h5>
                  <p class="card-text">A vehicle maintenance tracker that uses the VIN API to pull up a user’s vehicle info, allowing them to see a dashboard of features including their mileage, oil change tracking, and warranty information.</p>
                  <a href="https://github.com/linneagear/DRIVERkick" ><i class="fab fa-github icon"></i></a>
                  <a href="https://driverkick.herokuapp.com/" ><i class="fas fa-globe icon"></i></a>
                  <p className="techUsed">React • MongoDB • Express • Passport</p>
                </div>
              </div>
            </div>

          <div class="col-md-6 col-sm-12 col-xs-12 projectCard">
            <div class="card" >
              <img src={image2} className="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Wellyes</h5>
                  <p class="card-text"> The wellyes app is a helpful tool to track different goals by the user's choice, to help with their
                  mental health.</p>
                  <a href="https://github.com/linneagear/wellYes" ><i class="fab fa-github icon"></i></a>
                  <a href="https://glacial-meadow-97517.herokuapp.com/" ><i class="fas fa-globe icon"></i></a>
                  <p className="techUsed">Node.js • Express • Charts.js • Handlebars</p>
                </div>
              </div>
          </div>
        </div>


        {/* Second project row */}

        <div className="row">
          <div class="col-md-6 col-sm-12 col-xs-12 projectCard">
            <div class="card" >
              <img src={image3} className="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Burger App</h5>
                  <p class="card-text">A fun application that allows users to input burger types they would like to eat and "Devour it!"</p>
                  <a href="https://github.com/linneagear/burger"><i class="fab fa-github icon"></i></a>
                  <a href="https://agile-shelf-65251.herokuapp.com/" ><i class="fas fa-globe icon"></i></a>
                  <p className="techUsed">MySQL • Express • Handlebars</p>
                </div>
              </div>
            </div>

          <div class="col-md-6 col-sm-12 col-xs-12 projectCard">
            <div class="card" >
              <img src={image4} className="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Budget Tracker</h5>
                  <p class="card-text">This budget tracker allows the user to be able to add expenses and deposits to their budget with or without a connection.</p>
                  <a href="https://github.com/linneagear/PWA_BudgetTracker" ><i class="fab fa-github icon"></i></a>
                  <a href="https://aqueous-thicket-75974.herokuapp.com/" ><i class="fas fa-globe icon"></i></a>
                  <p className="techUsed">IndexedDB • MongoDB • Express</p>
                </div>
              </div>
          </div>
        </div>


        {/* Third project row */}

        <div className="row">
          <div class="col-md-6 col-sm-12 col-xs-12 projectCard">
            <div class="card" >
              <img src={image5} className="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">MoveMe</h5>
                  <p class="card-text">MoveMe is an application for finding movers, storage, or where to rent a truck in your area.</p>
                  <a href="https://github.com/Dayman628/move-me"><i class="fab fa-github icon"></i></a>
                  <a href="https://move-me-by-glass.netlify.app/" ><i class="fas fa-globe icon"></i></a>
                  <p className="techUsed">Javascript • Bulma • APIs</p>
                </div>
              </div>
            </div>

          <div class="col-md-6 col-sm-12 col-xs-12 projectCard">
            <div class="card" >
              <img src={image6} className="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Template Engine</h5>
                  <p class="card-text">This application is a software engineering team generator command line application. It will prompt the user for information about the team manager and then information about the team
                    members.</p>
                  <a href="https://github.com/linneagear/templateEngine"><i class="fab fa-github icon"></i></a>
                  <a href="https://www.youtube.com/watch?v=1m_SW-wQEZY&feature=youtu.be" ><i class="fas fa-globe icon"></i></a>
                  <br></br>
                  <p className="techUsed">Node.js • Jest • Javascript</p>
                </div>
              </div>
          </div>

        </div>
        <br></br>
        <p>See my other projects <b ><a href="https://github.com/linneagear" className="link">here.</a></b></p>

      </section>
    </div>
  );
};

export default Projects;
