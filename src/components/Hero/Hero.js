import React from "react";
import "./Hero.css";
import heroimg from "../../assets/heroimg.png";
function Hero() {
  return (
    <div className="hero">
      <div className="heroTitle">DSC CTAE UDAIPUR</div>
      <div className="heroSubtitle fs-6">Let’s Code the future together</div>
      <br />
      <img src={heroimg} alt="hero" className="heroimg"></img>
    </div>
  );
}

export default Hero;
