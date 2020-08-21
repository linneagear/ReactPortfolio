import React, { Component } from "react";
import project from "../projects.json"
import Projects from "./pages/Projects"

class projectWrapper extends Component {
    // Setting this.state.friends to the friends json array
    state = {
     project
   };
   render() {
    return (
   <div>
        {this.state.project.map(item => (
          <Projects
            id={item.id}
            key={item.id}
            title={item.title}
            info={item.info}
            website={item.website}
            github={item.github}
            />
        ))}

   </div>
    )}
};

export default projectWrapper;