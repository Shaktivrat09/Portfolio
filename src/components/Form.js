import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="Form">
        <form>
            <label>Name</label>
            <input type="text" name="name" placeholder="Your Name"></input>
            <label>Email</label>
            <input type="text" name="email" placeholder="Your Email"></input>
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Your Message" required></input>
            <label>Message</label>
            <textarea name="message" row="6" placeholder="Type your message Here" />
            <button className="btn">Submit</button>
        </form>
    </div>
  );
};

export default Form