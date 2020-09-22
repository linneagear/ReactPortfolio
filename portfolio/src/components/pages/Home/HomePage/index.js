import React from "react";
import HomeHero from "../HomeHero"
import AboutSection from "../AboutSection"
import Projects from "../../Projects"
import "./style.css";

function Home() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <Projects />
    </>
  );
}

export default Home;
