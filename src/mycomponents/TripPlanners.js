import React from "react";
import "./TripPlanner.css";
import popularImage1 from "./Content.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";

function TripPlanners() {
  const Planners = [
    {
      semititle: "GUIDED TOUR",
      title: "Rome City Tour",
      location: " Berlin, Germany",
      image: popularImage1,
      price: 95,
    },
    {
      semititle: "GUIDED TOUR",
      title: "Paris City Tour",
      location: " London, United Kingdom",
      image: popularImage1,
      price: 99,
    },
    {
      semititle: "GUIDED TOUR",
      title: "Barcelona City Tour",
      location: " Venice, Italy",
      image: popularImage1,
      price: 90,
    },
    {
      semititle: "GUIDED TOUR",
      title: "Budapest City Tour",
      location: " Berlin, Germany",
      image: popularImage1,
      price: 98,
    },
    {
      semititle: "GUIDED TOUR",
      title: "Rialto Bridge",
      location: "	 Venice, Italy",
      image: popularImage1,
      price: 89,
    },
  ];

  return (
    <div className="Planner">
      <div className="plannerTitle">
        <h1 className="planner-h1 display-4">Trip Planners</h1>
        <div className="planner-underline"></div>
        <p className="fs-5 pt-4" style={{ color: "grey" }}>
          20 years from now you will be more disappointed by the things that you
          didn’t do. Stop regretting and start travelling, start throwing off
          the bowlines.
        </p>
        <div className="button-wrapper">
          <button className="btn-trip">View all trip plans</button>
        </div>
      </div>

      <div className="scrolling-trip">
        <div
          className="d-flex gap-3 pt-5 hide-scrollbar allow-overflow"
          style={{
            width: "100%",
            overflowX: "auto",
            scrollBehavior: "smooth",
            flexWrap: "nowrap",
          }}
        >
          {Planners.map((element, index) => (
            <div className="planning" key={index}>
              <div
                className="card text-bg-dark tripCard"
                style={{
                  flex: "0 0 auto",
                  borderRadius: "15px",
                  overflow: "hidden",
                  border: "none",
                }}
              >
                <img
                  src={element.image}
                  alt="Destination"
                  className="card-img"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
              <div className="plans">
                <div className="d-flex justify-content-between">
                  <p className="fs-6">{element.semititle}</p>
                  <p className="fs-6">
                    <FontAwesomeIcon icon={faEuroSign} />
                    {element.price}/Day
                  </p>
                </div>
                <div>
                  <h3>{element.title}</h3>
                </div>
                <div className="d-flex justify-content-between align-items-center fs-6">
                  <span className="stars fs-4">★★★★★</span>
                  <span>7 Days Tour</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TripPlanners;
