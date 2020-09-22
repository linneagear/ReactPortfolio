import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavBar";
import Home from "./components/pages/Home/HomePage";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects"
import Footer from "./components/Footer/index.js"
import "./App.css";

function App() {
  return (
    <>
      <Router>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
