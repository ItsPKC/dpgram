import React from "react";
import { Link } from "react-router-dom";
import "./Tools.css";

const Tools = () => {
  return (
    <div className="SpaceOptimiser tools-layout">
      <div className="tools-container">
        <div
          style={{
            // backgroundColor: "red",
            background: "linear-gradient(90deg,grey,black)",
            gridArea: "a",
            display: "grid",
            placeItems: "center",
            fontSize: "3em",
            fontWeight: "w700",
            borderTopLeftRadius: "3px",
            borderBottomLeftRadius: "3px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "calc(90%)",
              width: "calc(90%)",
              borderRadius: "calc(50%)",
              display: "grid",
              placeItems: "center",
            }}
          >
            &#x1F517;
          </div>
        </div>
        <div
          style={{
            gridArea: "b",
            display: "grid",
            placeItems: "center",
            backgroundColor: "black",
            color: "white",
            fontSize: "32px",
            fontWeight: "600",
            textAlign: "center",
            letterSpacing: "2px",
          }}
        >
          Advance Search Pattern
        </div>
        <div
          style={{
            backgroundColor: "black",
            gridArea: "c",
            color: "white",
            display: "grid",
            placeItems: "center",
            fontSize: "1.25em",
            letterSpacing: "1.25px",
            textAlign: "center",
          }}
        >
          Smartest way to ask from Search Engine. Are you ready ?
        </div>
        <div
          style={{
            background: "linear-gradient(90deg,black,grey)",
            gridArea: "d",
            display: "grid",
            placeItems: "center",
            height: "calc(100%)",
            width: "calc(100%)",
            borderTopRightRadius: "calc(50%)",
            borderBottomRightRadius: "calc(50%)",
          }}
        >
          <Link
            to="/en/asp"
            style={{
              textDecoration: "none",
              display: "grid",
              background: "red",
              color: "rgba(255,255,255,1)",
              placeItems: "center",
              height: "calc(70%)",
              width: "calc(70%)",
              borderRadius: "calc(50%)",
              border: "3px solid white",
              fontSize: "1.5em",
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tools;
