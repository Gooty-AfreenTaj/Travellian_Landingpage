import React from "react";
import "./BookingSec.css";

function BookingSec() {
  return (
    <div className="grid-container">
      <div className=" grid-container1">
        <div className="grid-container2">
          <div className="field-container">
            <label className="field-label">DESTINATION</label>

            <input type="text" placeholder="Dubai" className="field-input" />
          </div>
          <div className="field-container">
            <label className="field-label">PERSON</label>

            <input
              type="number"
              min="1"
              max="10"
              placeholder="2"
              className="field-input"
            />
          </div>
          <div className="field-container">
            <label className="field-label">CHECK-IN</label>

            <input type="date" className="field-input-date field-input" min={new Date().toISOString().split("T")[0]}/>
          </div>
          <div className="field-container">
            <label className="field-label">CHECK-OUT</label>

            <input type="date" placeholder="Dubai" className="field-input-date field-input" min={new Date().toISOString().split("T")[0]} />
          </div>
        </div>
        <div className="grid-container3">
          <button className=" btn book-now  fs-3 ">
            BOOK NOW
          </button>
          <div className="right-arrow fs-4">
            &rarr;
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default BookingSec;
