import React from "react";
import "./style.css";

function Footer() {
    var today = new Date()
    var year = today.getFullYear()
    

  return (
    <footer className="footer">
      <span >
       2020 © LINNEA GEAR
     </span>
    </footer>
  );
}

export default Footer;
