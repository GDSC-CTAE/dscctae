import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { geekOfMonthData } from "../../data/geekOfMonthData";
import "./GeekOfMonth.css";

function GeekOfMonth() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="gom" id="gom">
      <div className="container">
        <h1 className="gomTitle">Geek Of The Month</h1>
        <DatePicker
          closeOnScroll={true}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        {geekOfMonthData.map((gom, index) => {
          return gom.year === startDate.getFullYear().toString() &&
            gom.month === startDate.getMonth().toString() ? (
            <div className="geekCard" key={index}>
              <div className="row">
                <div className="col">
                  <h2>Competitive Programming</h2>
                  <div className="geekCard-horizontal">
                    <div className="geekCard-img">
                      <img src={gom.img} alt={gom.name} className="gomImg" />
                    </div>
                    <div>
                      <div className="geekCard-title">{gom.title}</div>
                      <div className="geekCard-name">{gom.name}</div>
                      <div className="geekCard-social">
                        <button className="btn btn-primary">linkedin</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h2>Development</h2>
                  <div className="geekCard-horizontal">
                    <div className="geekCard-img">
                      <img src={gom.img} alt={gom.name} className="gomImg" />
                    </div>
                    <div>
                      <div className="geekCard-title">{gom.title}</div>
                      <div className="geekCard-name">{gom.name}</div>
                      <div className="geekCard-social">
                        <button className="btn btn-primary">linkedin</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h1 key={index}></h1>
          );
        })}
      </div>
    </div>
  );
}

export default GeekOfMonth;
