import React from "react";
import "./Aboutus.css";
import { aboutData } from "../../data/aboutData";
import { mottoData } from "../../data/mottoData";

function Aboutus() {
  return (
    <div>
      <div className="container-fluid about">
        <div className="container">
          <div className="row  aboutus" id="aboutus">
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
      <div className="container-fluid motto">
        <div className="container">
          <div className="mb-5">
            <h1 className="mb-5">Our Motto</h1>

            <div className="row justify-content-center">
              <div className="col-lg-4 ">
                <img src="cp.svg" alt="cp" className="cp mb-4"></img>
                <p>{mottoData.cp}</p>
              </div>
              <div className="col-lg-4">
                <img src="web.svg" alt="web" className="web mb-4"></img>
                <p>{mottoData.web}</p>
              </div>
              <div className="col-lg-4">
                <img
                  src="android.svg"
                  alt="android"
                  className="android mb-4"
                ></img>
                <p>{mottoData.android}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
