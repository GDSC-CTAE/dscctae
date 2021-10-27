import React from "react";
import "./Projects.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import { projectData } from "../../data/projectsData";

function Project() {
  return (
    <div className="container mt-3" id="projects">
      <div>
        <h1>Projects</h1>
      </div>
      <br />
      <div className="row mt-5 justify-content-around">
        {projectData.map((projects, index) => {
          return (
            <div
              className="col-lg col-sm rounded project-container p-5"
              key={index}
            >
              <h3>{projects.title}</h3>
              <div className="mt-3 project-description">{projects.description}</div>
              <div>
                <hr />
              </div>
              <div className="row">
                <div className="col-8 align-self-center">
                  <span>Status : </span>
                  {/* <span className="badge rounded-pill bg-success">
                    {projects.status}
                  </span> */}
                  <span className={" badge rounded-pill "+ ( projects.status ? 'bg-success' : 'bg-danger')}>
                    {projects.statusName}
                  </span>
                </div>
                <div className="col-3 button-container">
                  <button className=" github-button  " onClick={()=>{window.open("https://github.com","_blank")}}>
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
      <br />
      <div>
          <button className="contribute-button rounded p-3 mt-5 ">
                  See All projects
          </button>
      </div>
    </div>
  );
}

export default Project;
