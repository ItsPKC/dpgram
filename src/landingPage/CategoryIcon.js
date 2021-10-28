import React from "react";
import { Link } from "react-router-dom";
import Logo from "../socialImage/facebook.svg";

const CategoryIcon = () => {
  return (
    <Link
      to="/en/category/CategoryName"
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
      <div style={{ display: "grid", placeItems: "center" }}>
        <p>Influencer</p>
      </div>
    </Link>
  );
};

export default CategoryIcon;
