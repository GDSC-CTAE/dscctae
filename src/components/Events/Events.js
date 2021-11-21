import React from "react";
import { eventsData } from "../../data/eventsData";
import "./Events.css";

function Events() {
  const descLengthTitle = 5;
  const descLengthDesc = 10;
  return (
    <div>
    <div className="mb-3 eventsTitle pt-5">
      <h1> Events Highligts</h1>
    </div>
    <div className="row pt-4 w-100 m-0">
      {eventsData.map((events,index)=>{
        return(
          <div className="col-lg-4 col-sm-12 event-container p-0 " key={index}>
              <img src={events.img} alt="Avatar" className="image w-100 h-100"  />
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
                          <button className=" event-view-button rounded p-1">View More</button>
                    </div>
                    <br />
                    <br />
                </div>
          </div>
      )})}

    </div>
</div>
  );
}

export default Events;
// {events.eventName <= descLengthTitle
//   ? events.eventName
//   : events.eventName.slice(0, 20) + "...."}
// </h4>
{/* <p className="cards-event-text">
{events.description <= descLengthDesc
  ? events.description
  : events.description.slice(0, 70) + "...."}
</p> */}

{/* <div className="row container">
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
</div> */}