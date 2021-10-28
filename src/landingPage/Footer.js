import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// import next1 from "../images/next1.png";
import email from "../socialImage/email.svg";
import twitter from "../socialImage/twitter.svg";
import linkedin from "../socialImage/linkedin.svg";
import facebook from "../socialImage/facebook.svg";
import whatsapp from "../socialImage/whatsapp.svg";

const Footer = () => {
  return (
    <div>
      {/* <div className="footer-logo">
        <img src={next1} alt="icyindia" />
      </div> */}
      <div className="footer-container">
        <div className="social-in-footer">
          <div>
            <a
              href="mailto:contact@icyindia.com"
              rel="me noreferrer"
              target="_blank"
            >
              <img
                alt="icyindia"
                src={email}
                className="social-in-footer-icon"
              ></img>
            </a>
          </div>
          <div>
            {/* <a
              href="https://twitter.com/IcyIndiaOffice"
              rel="me noreferrer"
              target="_blank"
            >
              <img
                alt="icyindia"
                src={twitter}
                className="social-in-footer-icon"
              ></img>
            </a> */}
            <img
              alt="icyindia"
              src={twitter}
              className="social-in-footer-icon"
            ></img>
          </div>
          <div>
            {/* <a
              href="https://www.facebook.com/pankaj.2702"
              rel="me noreferrer"
              target="_blank"
            >
              <img
                alt="icyindia"
                src={facebook}
                className="social-in-footer-icon"
              ></img>
            </a> */}
            <img
              alt="icyindia"
              src={facebook}
              className="social-in-footer-icon"
            ></img>
          </div>
          <div>
            <a
              href="https://in.linkedin.com/company/dpgram"
              rel="me noreferrer"
              target="_blank"
            >
              <img
                alt="icyindia"
                src={linkedin}
                className="social-in-footer-icon"
              ></img>
            </a>
          </div>
          <div>
            <img
              alt="icyindia"
              src={whatsapp}
              className="social-in-footer-icon"
            ></img>
          </div>
        </div>
        <div className="main-footer">
          <div className="footerButton">
            <Link to="/en/about" style={{ textDecoration: "none" }}>
              <p className="footerButtonItem">About</p>
            </Link>
          </div>
          <div className="footerButton">
            <Link to="/en/contact" style={{ textDecoration: "none" }}>
              <p className="footerButtonItem">Contact</p>
            </Link>
          </div>
          <div className="footerButton">
            <Link to="/en/privacy" style={{ textDecoration: "none" }}>
              <p className="footerButtonItem">Privacy</p>
            </Link>
          </div>
          <div className="footerButton">
            <Link to="/en/termsofuse" style={{ textDecoration: "none" }}>
              <p className="footerButtonItem">Terms of Use</p>
            </Link>
          </div>
          {/* <div> */}
          {/* <p>Disclaimer</p> */}
          {/* <p>Site Map</p> */}
          {/* </div> */}
        </div>
      </div>
      {/* <div style={{ height: 1, backgroundColor: "black" }}></div> */}
    </div>
  );
};

export default Footer;
