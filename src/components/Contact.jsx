import React from 'react';
import "./contact.scss";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="contact" id="contact">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="Message"/>
            <button type="submit">Send</button>
          </form>
        </div>
    </div>
  )
}

export default Contact