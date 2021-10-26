import React from "react";
import "./Aboutus.css";
import { aboutData } from "../../data/aboutData";

function Aboutus() {
  return (
    <div>
      <div className="container-fluid about" id="aboutus">
        <div className="container">
          <div className="row  aboutus">
            <div className="container mb-5">
              <h1> {aboutData.title}</h1>
            </div>
            <div className="col-lg-6">
              <img
                src="dscaboutsvg.svg"
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
    </div>
  );
}

export default Aboutus;
