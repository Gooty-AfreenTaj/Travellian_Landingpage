import React from "react";
import logo from "../Logo.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="Footer position-relative">
      <div className=" position-absolute Footer1">
        <div className="d-flex justify-content-center align-items-center "style={{fontFamily:"Playfair Display"}}>
          <h3 style={{fontSize:"3.5rem"}}>Our Newsletter</h3>
        </div>
        <div className="Footer1-1">
          <div className="d-flex flex-column justify-content-center align-items-start">
            <p style={{fontSize:"1.2rem", color:"#7b7979"}}>Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            </div>
            <div className="d-flex justify-content-center align-items-end footer-btn ">
              <button className=" text-white btn-sub ">Subscribe</button>
            </div>
        
        </div>
      </div>
      <div className="Footer2">
        <div className="div1 d-flex  flex-column  justify-content-center">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "3.3rem", width: "15rem" }}
          />
          <p>Copyright © Travellian 2020 All rights reserved</p>
        </div>
        <div className="div2 d-flex  flex-column">
          <h5>Menu</h5>
          <ul>
            <li>Home </li>
            <li>Explore </li>
            <li>Travel </li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="div3 d-flex  flex-column">
          <h5>Information</h5>
          <ul>
            <li>Destinations </li>
            <li>Destinations </li>
            <li>Terms & Conditions </li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="div4 d-flex  flex-column">
          <h5>Contact Info</h5>
          <ul>
            <li>+123 456 789 </li>
            <li>info@travellian.com </li>
            <li> 1245, New Yourk, USA </li>
          </ul>
        </div>
        <div className="div5 d-flex flex-column">
          <h5>Follow Us On</h5>
          <div className="d-flex gap-2">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faPinterest} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
