import React from "react";
import "./Projects.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import { projectData } from "../../data/projectsData";

function Project() {
  return (
    <div className="container mt-5" id="projects">
      <div>
        <h1>Projects</h1>
      </div>
      <div className="row mt-5 justify-content-around">
        {projectData.map((projects, index) => {
          return (
            <div
              className="col-lg col-sm rounded project-container p-5"
              key={index}
            >
              <h3>{projects.title}</h3>
              <div className="mt-3">{projects.description}</div>
              <div>
                <hr />
              </div>
              <div className="row">
                <div className="col-8 align-self-center">
                  <span>Status : </span>
                  <span className="badge rounded-pill bg-success">
                    Completed
                  </span>
                </div>
                <div className="col-3 button-container">
                  <button className=" github-button  ">
                    <GitHubIcon className="fs-1 h-100 w-100" />
                  </button>
                </div>
              </div>
              <br />
              <div>
                <button className="contribute-button rounded">
                  Wants to Contribute
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
