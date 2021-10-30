import React from "react";
import "./Projects.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import { projectData } from "../../data/projectsData";

function Project() {
  return (
    <div className=" projects" id="projects">
      <div className="container">
        <div className="mb-5 projectTitle">
          <h1>Projects</h1>
        </div>

        <div className="row projectCards container">
          {projectData.map((projects, index) => {
            return (
              <div
                className="col-lg rounded project-container p-3 m-3"
                key={index}
              >
                <h3>{projects.title}</h3>
                <div className="mt-3 project-description">
                  {projects.description}
                </div>
                <div>
                  <hr />
                </div>
                <div className="row">
                  <div className="col-8 align-self-center">
                    <span>Status : </span>
                    <span
                      className={
                        " badge rounded-pill " +
                        (projects.status ? "bg-success" : "bg-danger")
                      }
                    >
                      {projects.statusName}
                    </span>
                  </div>
                  <div className="col-3 button-container">
                    <button
                      className=" github-button  "
                      onClick={() => {
                        window.open("https://github.com", "_blank");
                      }}
                    >
                      <GitHubIcon className="fs-1 h-100 w-100" />
                    </button>
                  </div>
                </div>
                <br />
                <div>
                  <button className=" rounded btn btn-light">
                    Wants to Contribute
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <div>
          <button className="contribute-button rounded p-3 mt-5 ">
            See All projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
