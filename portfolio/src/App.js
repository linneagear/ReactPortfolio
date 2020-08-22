import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects"
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper"
import Resume from "./components/pages/Resume"

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
          <Route exact path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <projectWrapper />
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}
}

export default App;
