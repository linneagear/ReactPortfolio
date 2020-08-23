import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <section class="footerLinks">
        
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/linnea-gear/" ><i
          class="fab fa-linkedin"></i></a>
        &nbsp; • &nbsp; 
        {/* GitHub */}
        <a href="https://github.com/linneagear" ><i class="fab fa-github"></i></a>
        &nbsp; • &nbsp; 
        <a href="https://github.com/linneagear/Resume/raw/master/Linnea_Gear_Resume%20(2).pdf" >
          Resume
        </a>
      </section>
      Made with <i class="fas fa-heart"></i> and <i class="fas fa-coffee"></i>
      <br></br>
      <span >
       2020 © LINNEA GEAR
     </span>
    </footer>
  );
}

export default Footer;
