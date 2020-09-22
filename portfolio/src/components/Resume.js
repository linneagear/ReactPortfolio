import React from 'react';
import Pdf from "../Documents/resume.pdf";

function Resume() {
   
  return (
    <div className = "App">
      <a href = {Pdf} target = "_blank">Resume</a>
    </div>
  )
  
}

export default Resume;