import React from "react";
import { eventsData } from "../../data/eventsData";
import "./Events.css";

function Events() {
  return (
    <div className=" events " id="events">
      <div className="container">
        <div className="mb-3 eventsTitle">
          <h1> Events</h1>
        </div>
        <div className="row">
          {eventsData.map((events, index) => {
            return (
              <div class="card col-3 m-3" key={index}>
                <img
                  class="card-img-top"
                  src={events.img}
                  alt="Cardimage cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{events.eventName}</h5>
                  <p class="card-text">{events.description}</p>
                  <a href={events.link} class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
