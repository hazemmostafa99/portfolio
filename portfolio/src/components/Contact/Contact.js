import React, { useState } from "react";
import "./Contact.scss";
const Contact = () => {
  const [message, setMessage] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div id="contact" className="contact">
      <div className="left">
        <img src="assets\shake.svg" alt="shake" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
        {message && <p>Thanks, I'll replay ASAP :)</p>}
      </div>
    </div>
  );
};

export default Contact;
