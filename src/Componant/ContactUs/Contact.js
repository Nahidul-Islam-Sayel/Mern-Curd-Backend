import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div class="contract">
        <div class="login">
          <form action="signin.php" method="POST">
            <h2>Contact Us </h2>
  
            <input
              type="text"
              name="username"
              placeholder="Your Name "
              required
            />
            <input
              type="email"
              name=""
              placeholder="Your Email  "
              required
            />
            <textarea cols="20"rows="5" name="" type="text" placeholder="Write Someting... "></textarea>
            <button type="submit" name="log"><b> Send</b></button>
          </form>
        </div>
      </div>
  );
};

export default Contact;
