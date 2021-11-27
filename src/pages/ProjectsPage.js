import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { projectData } from "../data/projectsData";

function ProjectsPage() {
  return (
    <div>
      <div className=" projects " id="projects">
        <div className="container">
          <div className="mb-5 projectTitle pt-3 mt-5">
            <h1>Projects</h1>
          </div>
          <div className="row projectCards container text-center">
            {projectData.map((projects, index) => {
              return (
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
                              window.open("https://github.com", "_blank");
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
                          href={projects.link}
                        >
                          Wants to Contribute
                        </a>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
