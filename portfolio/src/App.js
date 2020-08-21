import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects"
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper"
import About from "./components/pages/About"
import Resume from "./components/pages/Resume"
import project from "./projects.json"
import projectWrapper from "./components/projectWrapper"

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
 // Setting this.state.friends to the friends json array
 

render() {
  return (
    <Router>
      <div>
        <Wrapper>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <projectWrapper />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;
