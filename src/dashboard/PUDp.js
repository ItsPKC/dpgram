import React from "react";
import "../landingPage/SpaceOptimiser.css";
import TempImage from "../socialImage/logo.svg";

const PUDp = () => {
  return (
    <div
      className="SpaceOptimiser"
      style={{
        minHeight: "calc(100vh - 105px)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplate: "1fr 40px",
          placeItems: "center",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, black 50%)",
        }}
      >
        <img
          src={TempImage}
          alt="icy india"
          style={{
            height: "200px",
            width: "200px",
            borderRadius: "100px",
            marginTop: "20px",
          }}
        />
        <p
          style={{
            cursor: "pointer",
            height: "40px",
            width: "40px",
            margin: "0px 10px 10px 0px",
            borderRadius: "5px",
            display: "grid",
            placeItems: "center",
            justifySelf: "flex-end",
            backgroundColor: "white",
          }}
        >
          $
        </p>
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          marginTop: "50px",
        }}
      >
        <p
          style={{
            backgroundColor: "rgb(255,0,0)",
            // backgroundColor: "rgb(13,17,43)",
            padding: "5px 30px 8px 30px",
            borderRadius: "5px",
            color: "white",
            fontSize: "20px",
            fontWeight: "600",
            letterSpacing: "2px",
          }}
        >
          Save
        </p>
      </div>
    </div>
  );
};

export default PUDp;
