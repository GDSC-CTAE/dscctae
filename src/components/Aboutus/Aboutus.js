import React , {useEffect} from "react";
import "./Aboutus.css";
import { aboutData } from "../../data/aboutData";
import Aos from "aos";
import "aos/dist/aos.css";


function Aboutus() {
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
  return (
    <div className=" about " id="aboutus">
      <div className="container">
        <div className="mb-3 aboutTitle">
          <br />
          <div data-aos="fade-up">
             <h1> {aboutData.title}</h1>
          </div>
        </div>
        <br />
            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
                <img
                  src={aboutData.img}
                  alt="dscaboutsvg"
                  className="dscaboutsvg"
                ></img>
              </div>
              <div className="col-lg-6 aboutus-matter" data-aos="fade-left">
                <p>{aboutData.description}</p>
              </div>
            </div>

      </div>
    </div>
  );
}

export default Aboutus;
