import React, { useEffect } from "react";
import "./Projects.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import { projectData } from "../../data/projectsData";
import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className=" projects " id="projects">
      <div className="container">
        <div className="mb-5 projectTitle pt-3">
          <h1>Projects</h1>
        </div>
        <div className="row projectCards container text-center">
          {projectData.map((projects, index) => {
            return index <= 2 ? (
              <div
                className="col-lg rounded project-container p-5 m-3 "
                key={index}
                data-aos="fade-down-left"
              >
                <h3>{projects.title}</h3>
                <div className="row justify-content-center h-100">
                  <div className="col-xs-12 mt-3 project-description ">
                    {projects.description}
                  </div>
                  <hr className="" />
                  <div className="col-xs-12 align-self-end ">
                    <div className="row">
                      <div className="col-8 align-self-center">
                        <span>Status : </span>
                        <span
                          className={
                            " badge rounded-pill " +
                            (projects.status === "true"
                              ? "bg-success"
                              : "bg-danger")
                          }
                        >
                          {projects.statusName}
                        </span>
                      </div>
                      <div className="col-3 button-container">
                        <button
                          className=" github-button  "
                          onClick={() => {
                            window.open(projects.link, "_blank");
                          }}
                        >
                          <GitHubIcon className="fs-1 h-100 w-100" />
                        </button>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <a
                        className="contribute-button rounded btn"
                        href={projects.Clink}
                      >
                        Wants to Contribute
                      </a>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            );
          })}
        </div>
        <br />
        <div>
          <a className="contribute-button rounded btn" href="/dscctae/projects">
            See All projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
