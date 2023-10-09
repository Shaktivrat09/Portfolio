import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../images/3425225.jpg";
import Pro from "../images/MyPhoto.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <div className="Picture">
            <img className="pro" src={Pro} alt="Not found" />
          </div>
          <p> Hi, I am Shaktivrat.</p>
          <h1>FrontEnd Developer.</h1>
          <div>
            <Link to="/project" className= "btn"> Projects </Link>
            <Link to="/contact" className= "btn btn-light"> Contact </Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg;