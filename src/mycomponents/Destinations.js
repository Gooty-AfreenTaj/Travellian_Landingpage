import React, { useRef } from "react";
import "./Destinations.css";
import popularImage1 from "./Content.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ITEM_WIDTH = 180; // matches card width

function Destinations() {
  const containerRef = useRef();

  const handleScroll = (amount) => {
    containerRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  const destinations = [
    {
      title: "Moment of Berlin",
      location: " Berlin, Germany",
      image: popularImage1,
    },
    {
      title: "Millenium Bridge",
      location: " London, United Kingdom",
      image: popularImage1,
    },
    {
      title: "Rialto Bridge",
      location: " Venice, Italy",
      image: popularImage1,
    },
    {
      title: "Moment of Berlin",
      location: " Berlin, Germany",
      image: popularImage1,
    },
    {
      title: "Rialto Bridge",
      location: "	 Venice, Italy",
      image: popularImage1,
    },
     {
      title: "Moment of Berlin",
      location: " Berlin, Germany",
      image: popularImage1,
    },
    {
      title: "Millenium Bridge",
      location: " London, United Kingdom",
      image: popularImage1,
    },
    {
      title: "Rialto Bridge",
      location: " Venice, Italy",
      image: popularImage1,
    },
    {
      title: "Moment of Berlin",
      location: " Berlin, Germany",
      image: popularImage1,
    },
    {
      title: "Rialto Bridge",
      location: "	 Venice, Italy",
      image: popularImage1,
    },
  ];

  return (
    <div className="destination">
      {/* --- Section Title --- */}
      <div className="desTitle">
        <div className="desTitle1">
          <h1 className="des-h1 display-4">Popular Destinations</h1>
          <div className="des-underline"></div>
          <p className="fs-5 pt-3" style={{ color: "grey" }}>
            Most popular destinations around the world, from historical places
            to natural wonders.
          </p>
        </div>

        {/* --- Navigation Buttons --- */}
        <div className="pop-buttons">
          <button
            className="nav-btn prev-btn"
            onClick={() => handleScroll(-ITEM_WIDTH)}
          >
            &#8249;
          </button>
          <button
            className="nav-btn next-btn"
            onClick={() => handleScroll(ITEM_WIDTH)}
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* --- Horizontal Scroll Container --- */}
      <div className="scrolling">
        <div
          className="d-flex gap-4 pt-5 hide-scrollbar"
          ref={containerRef}
          style={{
            width: "100%",
            overflowX: "auto",
            scrollBehavior: "smooth",
            flexWrap: "nowrap",
          }}
        >
          {destinations.map((element, index) => (
            <div
              key={index}
              className="card text-bg-dark elementdim"
              style={{
                flex: "0 0 auto",
                borderRadius: "15px",
                overflow: "hidden",
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
              <div
                className="card-img-overlay d-flex flex-column justify-content-end"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  padding: "20px",
                }}
              >
                <h5 className="card-title mb-1">{element.title}</h5>
                <p className="card-text mb-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ marginRight: "5px", color: "#FFFFFF" }}
                  />
                  {element.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-nav">
        <button
          className="nav-btn prev-btn"
          onClick={() => handleScroll(-ITEM_WIDTH)}
        >
          &#8249;
        </button>
        <button
          className="nav-btn next-btn"
          onClick={() => handleScroll(ITEM_WIDTH)}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Destinations;
