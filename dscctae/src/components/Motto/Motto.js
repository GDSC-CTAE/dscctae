import React from "react";
import "./Motto.css";
import { mottoData } from "../../data/mottoData";
function Motto() {
  return (
    <div className=" motto">
      <div className="container-fluid">
        <div className="container">
          <h1 className="mb-5">Our Motto</h1>

          <div className="row ">
            <div className="col-lg cards ">
              <h3 className="mb-3">{mottoData.name[0]}</h3>
              <img src="cp.svg" alt="cp" className="cp mb-4"></img>
              <p>{mottoData.cp}</p>
            </div>
            <div className="col-lg cards ">
              <h3 className="mb-3">{mottoData.name[1]}</h3>
              <img src="web.svg" alt="web" className="web mb-4"></img>
              <p>{mottoData.web}</p>
            </div>
            <div className="col-lg cards ">
              <h3 className="mb-3">{mottoData.name[2]}</h3>
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
  );
}

export default Motto;
