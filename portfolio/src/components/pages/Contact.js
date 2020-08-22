import React from "react";
import "./contact.css"

function Contact() {
  return (
    <div class="container">
      <div class="contact">
        
        <p class="contact2">Contact</p>
          <br />
          <div class="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" />
          </div>
        
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <button type="button" class="btn btn-outline-info">Submit</button>
      </div>
      
    </div>
  );
}

export default Contact;
