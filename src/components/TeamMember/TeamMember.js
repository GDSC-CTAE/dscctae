import React from "react";
import "./TeamMember.css";
import { teamData } from "../../data/teamData";
function TeamMembers() {
  return (
    <div className="container-fluid teamMember" id="team">
      <div className="container" id="team">
        <div className="memberTitle mb-3">
          <h1>Team Members</h1>
        </div>

        <div className="row ">
          {teamData.map((member, index) => {
            return (
              <div className="col-lg-3 col-sm mb-2 line" key={index}>
                <div className="border h-100 shadow-sm pt-5 rounded image-conatiner">
                  <div className="text-center">
                    <div className="img-hover-zoom img-hover-zoom--colorize">
                      <img
                        className="shadow imgTeam"
                        src="https://source.unsplash.com/rDEOVtE7vOs/600x600"
                        alt="AnotherImage zoom-on-hover effect"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="my-2 text-center ">
                      <h4>{member.name}</h4>
                    </div>
                    <div className="mb-3">
                      <h2 className="text-uppercase text-center role fs-6">
                        {member.post}
                      </h2>
                    </div>
                    <div className="box">
                      <div>
                        <ul className="list-inline">
                          <li className="list-inline-item m-2">
                            <i className="fab fa-github "></i>
                          </li>
                          <li className="list-inline-item m-2">
                            <i className="fab fa-linkedin-in"></i>
                          </li>
                          <li className="list-inline-item m-2">
                            <i className="fab fa-instagram"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default TeamMembers;
