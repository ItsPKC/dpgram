import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../socialImage/logo.svg";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="branding">
          <img
            alt="Icy India"
            className="logo"
            // src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
            src={logo}
          />
          <p className="trademark">dpGram</p>
        </div>
      </Link>
      <div className="nav-button-group">
        {/* <button id="hBtn" className="h-button"><span
                            style="font-style: normal; color: #000; margin-right: 5px;">&#x2702;</span>Home</button>
                     */}
        {/* <div className="nav-button">Home</div> */}
        <Link to="/en/androidapps" style={{ textDecoration: "none" }}>
          <div className="nav-button">Android Apps</div>
        </Link>
        <Link to="/en/iosapps" style={{ textDecoration: "none" }}>
          <div className="nav-button">iOS Apps</div>
        </Link>
        <Link to="/en/websites" style={{ textDecoration: "none" }}>
          <div className="nav-button">Websites</div>
        </Link>
        {/* <Link to="/en/suggest" style={{ textDecoration: "none" }}>
          <div className="nav-button">Suggest</div>
        </Link> */}
        <Link to="/en/tools" style={{ textDecoration: "none" }}>
          <div className="nav-button">Tools</div>
        </Link>
      </div>
      <div className="menu-button" onClick={props.menuController}>
        <span>&#9776;</span>
      </div>
    </div>
  );
};

export default Header;
