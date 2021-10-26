import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="heroTitle">DSC CTAE UDAIPUR</div>
      <div className="heroSubtitle">
        Enabling students to make an impact for better future
      </div>
      <img src="heroimg.png" alt="hero" className="heroimg"></img>
    </div>
  );
}

export default Hero;
