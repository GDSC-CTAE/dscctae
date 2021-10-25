import React from "react";
import "./Aboutus.css";

function Aboutus() {
  return (
    <div className="container">
      <div className="row  aboutus" id="aboutus">
        <div className="col-lg-6 aboutus-matter">
          <h1> About us</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src="dscaboutsvg.svg"
            alt="dscaboutsvg"
            className="dscaboutsvg"
          ></img>
        </div>
      </div>
      <div className="mb-5">
        <h1 className="mb-5">Our Motto</h1>

        <div className="row justify-content-center">
          <div className="col-lg-4 ">
            <img src="cp.svg" alt="cp" className="cp mb-4"></img>
            <p>
              {" "}
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here
            </p>
          </div>
          <div className="col-lg-4">
            <img src="web.svg" alt="web" className="web mb-4"></img>
            <p >
               {" "}
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here
            </p>
          </div>
          <div className="col-lg-4">
            <img src="android.svg" alt="android" className="android mb-4"></img>
            <p>
              {" "}
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
