import React, { useEffect } from "react";
import { eventsData } from "../../data/eventsData";
import "./Events.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Events() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const descLengthTitle = 5;
  const descLengthDesc = 10;
  return (
    <div>
      <div className="mb-3 eventsTitle pt-5">
        <h1> Events Highligts</h1>
      </div>
      <div className="row pt-4 w-100 m-0">
        {eventsData.map((events, index) => {
          return (
            <div
              className="col-lg-4 col-sm-12 event-container p-0 "
              key={index}
              data-aos="zoom-in"
            >
              <img
                src={events.img}
                alt="Avatar"
                className="image w-100 h-100"
              />
              <div className="row middle  h-100 w-100 align-items-center">
                <div className="eventsTitle col-12 mt-3">
                  <h1>
                    {events.eventName <= descLengthTitle
                      ? events.eventName
                      : events.eventName.slice(0, 24) + "...."}
                  </h1>
                </div>
                <div className="event-text col-12 ">
                  <p className="cards-event-text p-4">
                    {events.description <= descLengthDesc
                      ? events.description
                      : events.description.slice(0, 200) + "...."}
                  </p>
                </div>
                <div className="col-12 ">
                  <button className=" event-view-button rounded p-1">
                    View More
                  </button>
                </div>
                <br />
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Events;
