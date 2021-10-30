import React from "react";
import "./Aboutus.css";
import { aboutData } from "../../data/aboutData";

function Aboutus() {
  return (
    <div className=" about " id="aboutus">
      <div className="container">
        <div className="mb-3 aboutTitle">
          <h1> {aboutData.title}</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img
              src={aboutData.img}
              alt="dscaboutsvg"
              className="dscaboutsvg"
            ></img>
          </div>
          <div className="col-lg-6 aboutus-matter">
            <p>{aboutData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
