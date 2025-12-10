import React, { useRef } from "react";
import "./Experiences.css";
import popularImage1 from "./Content.png";

const ITEM_WIDTH = 150; // matches card width

function Experiences() {
  const containerRef = useRef();

  const handleScroll = (amount) => {
    containerRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  const expns = [
    { image: popularImage1, name: "John Doe", job: "Accountant" },
    { image: popularImage1, name: "John Smith", job: "Journalist, HWO News" },
    { image: popularImage1, name: "Alice Brown", job: "Designer" },
    { image: popularImage1, name: "Mark Lee", job: "Developer" },
  ];

  return (
    <div className="expns">
      <div className="expnsTitle">
        <h1 className="expns-h1 display-4">Traveler's Experiences</h1>
        <div className="expns-underline"></div>
        <p className="fs-5 pt-1" style={{ color: "grey" }}>
          Here some awesome feedback from my travelers
        </p>
      </div>

      {/* CARDS SCROLLER */}
      <div className="scrolling-expns">
        <div
          className="d-flex gap-5 pt-5 hide-scrollbar"
          ref={containerRef}
          style={{
            width: "100%",
            overflowX: "auto",
            scrollBehavior: "smooth",
            flexWrap: "nowrap",
          }}
        >
          {expns.map((element, index) => (
            <div className="review-wrapper" key={index} >
              <div className="review-avatar-box">
                <img
                  src={element.image}
                  alt="Traveler"
                  className="review-avatar"
                />
              </div>

              <div className="review-card">
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness.
                </p>

                <p className="stars">★★★★★</p>

                <h4 className="review-name">{element.name}</h4>
                <p className="review-job">{element.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NAV BUTTONS */}
      <div className="nav-btm-btns">
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

export default Experiences;
