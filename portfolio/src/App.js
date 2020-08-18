import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper"
import About from "./components/pages/About"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
