import React from "react";
import heroSection from "../heroSection.png";
import Navbar from "./Navbar";
import BookingSec from "./BookingSec";

const Landing = () => {
  return (
   <div className="landing-container position-relative" style={{ height: "100%" }}>

      {/* HERO IMAGE AS BACKGROUND */}
      <img
        src={heroSection}
        alt="Hero Section"
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ zIndex: 0 }}
      />

      {/* OVERLAY CONTENT */}
      <div
        className="overlay w-100 d-flex flex-column text-white"
        style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}
      >
        <Navbar />

        {/* TEXT SECTION */}
        <div
          className="container my-1"
          style={{ paddingTop: "5rem", marginLeft: "1rem" }}
        >
          <h1 className="display-3 pad" style={{ fontFamily: "Times New Roman" }}>
            Start your unforgettable
          </h1>
          <h1 className="display-3 pad" style={{ fontFamily: "Times New Roman" }}>
            journey with us
          </h1>
          <p className="fs-6 pad">The best travel for your journey begins now</p>
        </div>

        <BookingSec />
      </div>
    </div>
  );
};

export default Landing;
