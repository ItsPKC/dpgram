import React from "react";
import { Link } from "react-router-dom";
import Logo from "../socialImage/facebook.svg";

const PlatformIcon = () => {
  return (
    <Link
      to="/en/profile/pu-portfolio/Facebook"
      style={{
        // To avoid link style
        textDecoration: "none",
        // *************************
        display: "grid",
        gridTemplateRows: "auto 40px",
        border: "0.5px solid black",
        borderRadius: "3px",
        padding: "10px 10px 0px 10px",
        // margin: "10px 0px",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <img
          src={Logo}
          alt="Icy India"
          style={{
            height: "80px",
            width: "80px",
          }}
        />
      </div>
      <div
        style={{
          marginTop: "3px",
          display: "grid",
          placeItems: "center",
          fontWeight: "600",
          letterSpacing: "1px",
          color: "red",
        }}
      >
        Influencer
      </div>
    </Link>
  );
};

export default PlatformIcon;
