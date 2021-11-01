import React from "react";
import { eventsData } from "../../data/eventsData";
import "./Events.css";

function Events() {
  const descLength = 10;
  return (
    <div className=" events " id="events">
      <div className="container">
        <div className="mb-3 eventsTitle">
          <h1> Events</h1>
        </div>
        <div className="row container">
          {eventsData.map((events, index) => {
            return (
              <div class="cards-event col-lg-4 m-3" key={index}>
                <div className="cards-event-img">
                  <img
                    class="cards-event-img-top"
                    src={events.img}
                    alt="CardEvent"
                  />
                </div>
                <div class="cards-event-body">
                  <h4>{events.eventName}</h4>
                  <p class="cards-event-text">
                    {events.description < descLength
                      ? events.description
                      : events.description.split(0, 15) + "...."}
                  </p>
                  <a href={events.link} class="btn btn-primary">
                    Know More!
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
