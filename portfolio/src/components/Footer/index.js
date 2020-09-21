import React from "react";
import "./style.css";

function Footer() {
  return (

    <footer className="footer">
       <div className="container">
      <section class="footerLinks">
        
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/linnea-gear/" ><i
          class="fab fa-linkedin"></i></a>
        &nbsp; • &nbsp; 
        {/* GitHub */}
        <a href="https://github.com/linneagear" ><i class="fab fa-github"></i></a>
        &nbsp; • &nbsp; 
        <a href="https://docs.google.com/document/d/e/2PACX-1vRYTEWiYMQCYFQmKXJWBaA1BX7f4_YSau9c0AcChcAJMUgiNyo80I804qtwyE_aDz8Ho97AfMMiM6pv/pub" >
          Resume
        </a>
      </section>
      <br></br>
      Made with <i class="fas fa-heart"></i> and <i class="fas fa-coffee"></i>
      <br></br>
      <span >
       2020 © LINNEA GEAR
     </span>
     </div>
    </footer>
  );
}

export default Footer;
