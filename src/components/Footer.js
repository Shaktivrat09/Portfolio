import "./FooterStyles.css"
import {FaGithub, FaHome,FaPhone,FaMailBulk,FaFacebook,FaLinkedin} from "react-icons/fa";

import React from 'react'

const facebookLink = 'https://www.facebook.com/shaktivrat.singh/';
const linkedinLink = 'https://www.linkedin.com/in/shaktivrat-kumar-singh-9414631ba/';
const githubLink = 'https://github.com/Shaktivrat09';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>Aplha-2,Greater Noida,U.P.</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>  <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    9264100941</h4>
                </div>
                <div className="email">
                    <h4>  <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    shaktivratsingh@gmil.com</h4>
                </div>

            </div>
            <div className="right">
                <h4>About</h4>
                <p>This is Shaktivrat Kumar Singh.I am a react developer</p>
                <div className="social">
                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer