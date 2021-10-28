import React from "react";
import "./SectionBlock.css";
import "../misc/firebaseSetup.js";
import { FBfirestore } from "../misc/firebaseSetup.js";

const requestDetail = async () => {
  await FBfirestore.collectionGroup("public")
    .where("hawkEye", "array-contains", "pankaj.2702")
    .get()
    .then((qs) => {
      qs.forEach((ds) => {
        // using name within big bracket provide facility to use name that also include dot(.)
        console.log(
          ds.data()["platfrom"]["facebook"]["username"],
          ds.data()["platfrom"]["facebook"]["profileLink"]
        );
      });
    });
};

const SectionBlock = (props) => {
  return (
    <div className="sb-item">
      <img alt="icyindia" src={props.img} className="sb-content-icon" />
      {/* <button onclick={openDl('')} className="sb-movie-name">Dummy</button> */}
      <button className="sb-block-title">{props.t}</button>
      {/* <div className="sb-block-title-detail">
        <p className="sb-block-title-detail">{props.t1}</p>
        <p className="sb-block-title-detail">{props.t2}</p>
        <p className="sb-block-title-detail">{props.t3}</p>
      </div> */}
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
        onClick={requestDetail}
        // onClick={() => console.log("pankaj kumar")}
        style={{
          cursor: "pointer",
          display: "grid",
          placeItems: "center",
          width: "100%",
          marginTop: "10px",
          // padding: "4px 0px",
          height: "35px",
          borderRadius: "2px",
          // Dynamically managed
          background: props.backgroundColor,
          // Dynamically managed
          color: props.color,
          // textShadow: "rgba(0,0,0,1) 1px 1px 2px",
          textAlign: "center",
          fontSize: "18px",
          fontFamily: "Segoe UI",
          letterSpacing: "1.5px",
          fontWeight: "600",
        }}
      >
        {props.action}
      </div>
    </div>
  );
};

export default SectionBlock;
