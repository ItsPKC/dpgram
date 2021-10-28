import React from "react";
import { Link } from "react-router-dom";
import "./PreviewBlock.css";

const PreviewBlock = (props) => {
  return (
    <div className="pb-item">
      <img
        alt="icyindia"
        style={{
          width: "110px",
          height: "110px",
          marginTop: "5px",
          marginBottom: "10px",
          background: "white",
          padding: "2px",
          border: "2px solid black",
          // 55+ 2-padding + 2-border = 59
          borderRadius: "59px",
        }}
        src={props.img}
        className="pb-content-icon"
      />
      {/* <button onclick={openDl('')} className="pb-movie-name">Dummy</button> */}
      <Link
        to={"/" + props.username}
        className="pb-block-title"
        style={{
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        {props.name}
      </Link>
      {/* <div className="block-title-detail">
        <p className="pb-block-title-detail">{props.t1}</p>
        <p className="pb-block-title-detail">{props.t2}</p>
        <p className="pb-block-title-detail">{props.t3}</p>
      </div> */}
      {/* This div is used to push this combo at bottom in Block */}
      <div style={{ alignSelf: "flex-end" }}>
        <div
          style={{
            marginTop: "10px",
            display: "grid",
            gridTemplateColumns: "1fr",
            width: "calc(100%)",
            placeItems: "center",
            height: "35px",
            backgroundColor: "rgba(0,0,0,0.035)",
            borderRadius: "2px",
          }}
        >
          <p
            style={{
              width: "calc(100% - 10px)",
              padding: "0px 5px",
              borderRadius: "2px",
              textAlign: "center",
              fontSize: "15px",
              fontFamily: "Segoe UI",
              letterSpacing: "1.5px",
              fontWeight: "400",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {props.username}
          </p>
        </div>
        <div
          onClick={() => console.log("pankaj kumar")}
          style={{
            cursor: "pointer",
            display: "grid",
            placeItems: "center",
            width: "100%",
            height: "35px",
            marginTop: "10px",
            // padding: "4px 0px",
            borderRadius: "2px",
            // Dynamically managed
            background: props.backgroundColor,
            // Dynamically managed
            color: props.color,
            // textShadow: "rgba(0,0,0,1) 1px 1px 2px",
            textAlign: "center",
            fontSize: "18px",
            fontFamily: "Segoe UI",
            letterSpacing: "2px",
            fontWeight: "600",
          }}
        >
          {props.action}
        </div>
      </div>
    </div>
  );
};

export default PreviewBlock;
