import React,{useState} from "react";
import '../App.css'
import heroSection from "../heroSection.png";
import Navbar from "./Navbar";
import BookingSec from "./BookingSec";
import NavbarMobile from "./NavbarMobile";

const Landing = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
   <div className="landing-container position-relative" style={{ height: "100%" }}>

      {/* HERO IMAGE AS BACKGROUND */}
      <img
        src={heroSection}
        alt="Hero Section"
        className={` ${isOpen ? "hero-bg":"position-absolute top-0 start-0 w-100 h-100 object-fit-cover"}`}
        style={{zIndex:"0"}}/>

      {/* OVERLAY CONTENT */}
     {isOpen ?(<>
      <NavbarMobile  isOpen={isOpen} setIsOpen={setIsOpen}/></>): <div
        className="overlay w-100 d-flex flex-column text-white"
        style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}
      >
        <Navbar  isOpen={isOpen} setIsOpen={setIsOpen}/>

        {/* TEXT SECTION */}
        <div
          className="container my-1 landing-title"
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
      </div>}
    </div>
  );
};

export default Landing;
