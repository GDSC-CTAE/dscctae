import React from "react";
import { eventsData } from "../../data/eventsData";
import "./Events.css";

function Events() {
  const descLengthTitle = 5;
  const descLengthDesc = 10;
  return (
    <div className=" events " id="events">
      <div className="container">
        <div className="mb-3 eventsTitle">
          <h1> Events</h1>
        </div>
        <div className="row container">
          {eventsData.map((events, index) => {
            return (
              <div className="cards-event col-lg-4 m-3" key={index}>
                <div className="cards-event-img">
                  <img
                    className="cards-event-img-top"
                    src={events.img}
                    alt="CardEvent"
                  />
                </div>
                <div className="cards-event-body">
                  <h4>
                    {events.eventName <= descLengthTitle
                      ? events.eventName
                      : events.eventName.slice(0, 20) + "...."}
                  </h4>
                  <p className="cards-event-text">
                    {events.description <= descLengthDesc
                      ? events.description
                      : events.description.slice(0, 70) + "...."}
                  </p>
                  <a href={events.link} className="btn btn-primary">
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
