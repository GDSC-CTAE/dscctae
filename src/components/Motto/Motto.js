import React , {useEffect} from "react";
import "./Motto.css";
import { mottoData } from "../../data/mottoData";
import cp from "../../assets/cp.svg";
import web from "../../assets/web.svg";
import ai from "../../assets/android1.svg";
import Aos from "aos";
import "aos/dist/aos.css";
function Motto() {
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
  return (
    <div className=" motto ">
      <div className="container">
        <h1 className="mb-3 mottoTitle">Our Motto</h1>
        <br />
        <p className="text-center">
          We aim at collaborating together and making sure that every member of
          the community is able to make firm foundations for becoming the SDEs
          of tomorrow.
        </p>
        <div className="row" >
          <div className="col-lg cards m-3 p-3" data-aos="fade-down">
            <h4 className="mb-3">{mottoData.name[0]}</h4>
            <img src={cp} alt="cp" className="cp mb-4"></img>
            <p>{mottoData.cp}</p>
          </div>
          <div className="col-lg cards m-3" data-aos="fade-down">
            <h3 className="mb-3">{mottoData.name[1]}</h3>
            <img src={web} alt="web" className="web mb-4"></img>
            <p>{mottoData.web}</p>
          </div>
          <div className="col-lg cards m-3" data-aos="fade-down">
            <h3 className="mb-3">{mottoData.name[2]}</h3>
            <img src={ai} alt="android" className="android mb-4"></img>
            <p>{mottoData.android}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motto;
