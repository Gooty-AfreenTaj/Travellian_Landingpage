import React, { useState } from "react";
import logo from "../Logo.png";
import "../App.css";
import PropTypes from 'prop-types'

function Navbar({setIsOpen,isOpen}) {

  const [highlight, setHighlight] = useState("home");

  const handleHighlight = (e) => {
    e.preventDefault();
    setHighlight(e.target.id);
    setIsOpen(false);
    console.log(e.target.id);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4 Navbar navbar-dark pad">
        <div className="container-fluid d-flex justify-content-between px-5 ">
          <div className="d-flex justify-content-between  logo-toggle-gap">
            <img src={logo} alt="Logo" style={{ height: "30px" }} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className={`collapse navbar-collapse Box ${isOpen && "open"} `} id="navbarSupportedContent">
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

            <div className="d-flex justify-content-between gap-5 ">
              <button className="btn text-white " type="button">
                Login
              </button>
              <button className="btn btn-signup" type="button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;
