import React, { useState } from "react";
import logo from "../Logo.png";
import "../App.css";

function NavbarMobile({ setIsOpen, isOpen }) {
  const [highlight, setHighlight] = useState("home");

  const handleHighlight = (e) => {
    e.preventDefault();
    setHighlight(e.target.id);
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* WHITE PANEL OUTSIDE NAVBAR */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={toggleMenu}
          ></button>
        </div>
        <div className="nav-list">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className={`nav-link active ${
                highlight === "home" ? "active-link" : ""
              } `}
              aria-current="page"
              onClick={handleHighlight}
              href="/"
              id="home"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link active ${
                highlight === "explore" ? "active-link" : ""
              }`}
              aria-current="page"
              onClick={handleHighlight}
              href="/explore"
              id="explore"
            >
              Explore
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link active ${
                highlight === "travel" ? "active-link" : ""
              }`}
              aria-current="page"
              onClick={handleHighlight}
              href="/travel"
              id="travel"
            >
              Travel
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link active ${
                highlight === "blog" ? "active-link" : ""
              }`}
              aria-current="page"
              onClick={handleHighlight}
              href="/blog"
              id="blog"
            >
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link active ${
                highlight === "pricing" ? "active-link" : ""
              }`}
              aria-current="page"
              onClick={handleHighlight}
              href="/pricing"
              id="pricing"
            >
              Pricing
            </a>
          </li>
        </ul>
      </div>
        <div className="menu-buttons">
          <button className="btn login-btn" type="button">
            Login
          </button>
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar py-4 Navbar navbar-dark pad ">
        <div className="container-fluid d-flex justify-content-between px-5">
          <div className="d-flex justify-content-between logo-toggle-gap">
            <img src={logo} alt="Logo" style={{ height: "30px" }} />
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarMobile;
