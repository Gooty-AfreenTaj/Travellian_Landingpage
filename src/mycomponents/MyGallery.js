import React, { useRef } from "react";
import "./MyGallery.css";
import popularImage1 from "./Content.png";

const ITEM_WIDTH = 180; // matches card width

function MyGallery() {
  const containerRef = useRef();

  const handleScroll = (amount) => {
    containerRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  const gallery = [
    {
      image: popularImage1,
    },
    {
      image: popularImage1,
    },
    {
      image: popularImage1,
    },
    {
      image: popularImage1,
    },
    {
      image: popularImage1,
    },
     {
      image: popularImage1,
    },
    {
      image: popularImage1,
    },
    {
      image: popularImage1,
    },
    {
      image: popularImage1,
    },
    {
      image: popularImage1,
    },
  ];

  return (
    <div className="gallery">
      {/* --- Section Title --- */}
      <div className="galleryTitle">
        <div className="galleryTitle1">
          <h1 className="gallery-h1 display-4"> Destination Gallery</h1>
          <div className="gallery-underline"></div>
          <p className="fs-5 pt-1" style={{ color: "grey" }}>
            Our Photo Gallery on Trip
          </p>
        </div>

        {/* --- Navigation Buttons --- */}
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
      </div>

      {/* --- Horizontal Scroll Container --- */}
      <div className="scrolling-gallery">
        <div
          className="d-flex gap-5  hide-scrollbar"
          ref={containerRef}
          style={{
            width: "100%",
            overflowX: "auto",
            scrollBehavior: "smooth",
            flexWrap: "nowrap",
            paddingTop:"4rem"
          }}
        >
          {gallery.map((element, index) => (
            <div className="galleryCard" key={index}>
              <div
                className="card text-bg-dark galleryinCard"
                style={{
                  flex: "0 0 auto",
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
            </div>
          ))}
        </div>
      </div>
       <div className="bottom-buttons">
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

export default MyGallery;
