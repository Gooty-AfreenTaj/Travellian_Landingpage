import React, { useRef } from "react";
import "./SpecialOffer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import image1 from './Image Container (1).png';
import image2 from './Image Container (2).png';
import image3 from './Image Container (3).png';



const ITEM_WIDTH = 120; // matches card width

function SpecialOffer() {
  const containerRef = useRef();

  const handleScroll = (amount) => {
    containerRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  const SpecialOffers = [
    {
      title: "Lisbon, Portugal",
      para: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      image: image1,
     price:"750",
    },
    {
      title: " Athens, Greece",
      para: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      image: image2,
     price:"600",
    },
    {
      title: " Rome, Italy",
      para: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      image: image3,
     price:"700",
    },
    {
      title: "Lisbon, Portugal",
      para: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      image: image1,
     price:"850",
    },
    {
      title: "Lisbon, Portugal",
      para: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      image: image3,
     price:"650",
    },
     {
      title: "Lisbon, Portugal",
      para: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      image: image1,
     price:"750",
    },
    {
      title: " Athens, Greece",
      para: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      image: image2,
     price:"600",
    },
    {
      title: " Rome, Italy",
      para: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      image: image3,
     price:"700",
    },
    {
      title: "Lisbon, Portugal",
      para: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      image: image1,
     price:"850",
    },
    {
      title: "Lisbon, Portugal",
      para: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
      image: image3,
     price:"650",
    },
  ];

  return (
    <div className="offer">
      {/* --- Section Title --- */}
      <div className="offerTitle">
        <div className="nav-buttons">
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
        <div className="offerTitle1">
          <h1 className="offer-h1 display-4">Special Offer</h1>
          <div className="offer-underline"></div>
          <p className="fs-5 pt-3" style={{ color: "grey" }}>
            Check out our special offers and discounts
          </p>
        </div>

        {/* --- Navigation Buttons --- */}
      </div>

      {/* --- Horizontal Scroll Container --- */}
      <div className="scrolling-spcl">
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
          {SpecialOffers.map((element, index) => (
            <div
              key={index}
              className="card cardDim"
              style={{
                flex: "0 0 auto",
                borderRadius: "15px",
                overflow: "hidden",
                backgroundColor:"#FFF8F1",
              }}
            >
              <img
                src={element.image}
                className="card-img-top topImg"
                alt="..."
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h5 className="card-title mb-1 fs-4" style={{color:"grey",fontWeight:"400"}}>{element.title}</h5>
                <p className="card-text">{element.para}</p>
                <div>
                  <div className="d-flex justify-content-between align-items-center ">
                    <p className="fs-6" style={{color:"grey"}}>
                      From
                      <span className="pricing">
                        <FontAwesomeIcon icon={faEuroSign} />
                        {element.price}
                      </span>
                    </p>
                    <button className=" fs-6 btn btn-orange">DETAILS</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-btn">
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

export default SpecialOffer;
