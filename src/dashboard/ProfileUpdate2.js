import React, { useState, useEffect } from "react";
import "../landingPage/SpaceOptimiser.css";
import "../misc/firebaseSetup.js";
import "./ProfileUpdate.css";
import TempImage from "../socialImage/facebook.svg";
import { FBfirestore } from "../misc/firebaseSetup.js";

const ProfileUpdate2 = () => {
  const [_data, set_data] = useState(null);
  const [_data2, set_data2] = useState(null);

  useEffect(() => {
    try {
      FBfirestore.collection("user")
        .doc("uid")
        .collection("public")
        .doc("basic")
        .get()
        .then((ds) => {
          set_data(ds.data());
        });
      FBfirestore.collection("user")
        .doc("uid")
        .collection("private")
        .doc("registerway")
        .get()
        .then((ds) => {
          set_data2(ds.data());
        });
    } catch (error) {
      console.log(error.data());
    }
  });

  if (_data == null) {
    return (
      <div
        style={{
          minHeight: "calc(100vh - 105px)",
          display: "grid",
          placeItems: "center",
          fontSize: "18px",
          fontWeight: "500",
          letterSpacing: "1.5px",
        }}
      >
        Loading ...
      </div>
    );
  } else {
    return (
      <div className="SpaceOptimiser">
        <div className="pu-dp">
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
                backgroundColor: "white",
                height: "160px",
                width: "160px",
                borderRadius: "83px",
                marginTop: "20px",
                border: "3px solid white",
              }}
            />
            <div
              className="pu-edit-button"
              style={{
                background: "rgb(255,255,255,0.9",
                justifySelf: "flex-end",
                margin: "0px 10px 10px 0px",
              }}
            >
              &#9998;
            </div>
          </div>
        </div>
        <div className="pu-cred">
          {/* Email Start */}
          <div className="pu-bd-name-username">
            <div
              style={{
                fontWeight: "600",
                fontSize: "16px",
                letterSpacing: "1px",
              }}
            >
              Email
            </div>
            <div
              style={{
                letterSpacing: "1.5px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {_data2.way}
            </div>
            <div className="pu-edit-button">&#9998;</div>
          </div>
          {/* Email End */}
          {/* Password Start */}
          <div className="pu-bd-name-username" style={{ border: "none" }}>
            {/* To style used to remove border at the bottom of box */}
            <div
              style={{
                fontWeight: "600",
                fontSize: "16px",
                letterSpacing: "1px",
              }}
            >
              Password
            </div>
            <div style={{ letterSpacing: "1.5px" }}>*(can't view)</div>
            <div className="pu-edit-button">&#9998;</div>
          </div>
          {/* Password End */}
          <div></div>
        </div>
        <div className="pu-bd">
          {/* Name */}
          <div className="pu-bd-name-username">
            <div
              style={{
                fontWeight: "600",
                fontSize: "16px",
                letterSpacing: "1px",
              }}
            >
              Name
            </div>
            <div
              style={{
                letterSpacing: "1.5px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {_data["name"]}
            </div>
            <div className="pu-edit-button">&#9998;</div>
          </div>
          {/* Name End */}
          {/* Username */}
          <div className="pu-bd-name-username">
            <div
              style={{
                fontWeight: "600",
                fontSize: "16px",
                letterSpacing: "1px",
              }}
            >
              Username
            </div>
            <div>
              <span
                style={{
                  letterSpacing: "1.5px",
                }}
              >
                @
              </span>
              <span
                style={{
                  letterSpacing: "1.5px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {_data["id"]}
              </span>
            </div>

            <div className="pu-edit-button">&#9998;</div>
          </div>
          {/* Username End */}
          {/* About Start */}
          <div className="pu-bd-about">
            <div
              style={{
                gridArea: "area1",
                fontWeight: "600",
                fontSize: "16px",
                letterSpacing: "1px",
              }}
            >
              About
            </div>
            <div
              className="pu-edit-button"
              style={{
                // Additional
                gridArea: "area2",
                justifySelf: "flex-end",
              }}
            >
              &#9998;
            </div>
            <div
              style={{
                gridArea: "area3",
                cursor: "pointer",
                backgroundColor: "rgb(0,0,0,0.025)",
                padding: "5px 10px",
                borderRadius: "5px",
                textAlign: "justify",
                // Additional
                marginTop: "15px",
              }}
            >
              {_data["about"]}
            </div>
          </div>
          {/* About End */}
        </div>
        <div className="pu-portfolio">
          <div
            style={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "rgb(0,0,0,0.025)",
              padding: "10px 0px",
              margin: "10px 5px",
              borderRadius: "5px",
              color: "rgb(0,0,255)",
              fontSize: "26px",
              fontWeight: "500",
              letterSpacing: "2.5px",
            }}
          >
            Portfolio
          </div>
          <div className="pu-portfolio-data">
            <img
              src={TempImage}
              alt="icy india"
              style={{ height: "40px", width: "40px", borderRadius: "15px" }}
            />
            <div
              style={{
                padding: "0px 10px",
                fontWeight: "500",
                fontSize: "20px",
                letterSpacing: "1.5px",
              }}
            >
              Facebook
            </div>
            <div className="pu-edit-button">&#9998;</div>
          </div>
          <div className="pu-portfolio-data">
            <img
              src={TempImage}
              alt="icy india"
              style={{ height: "40px", width: "40px", borderRadius: "15px" }}
            />
            <div
              style={{
                padding: "0px 10px",
                fontWeight: "500",
                fontSize: "20px",
                letterSpacing: "1.5px",
              }}
            >
              Facebook
            </div>
            <div className="pu-edit-button">&#9998;</div>
          </div>
          <div className="pu-portfolio-data">
            <img
              src={TempImage}
              alt="icy india"
              style={{ height: "40px", width: "40px", borderRadius: "15px" }}
            />
            <div
              style={{
                padding: "0px 10px",
                fontWeight: "500",
                fontSize: "20px",
                letterSpacing: "1.5px",
              }}
            >
              Facebook
            </div>
            <div className="pu-edit-button">&#9998;</div>
          </div>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <p
              style={{
                cursor: "pointer",
                // height: "45px",
                // width: "45px",
                display: "grid",
                placeItems: "center",
                backgroundColor: "rgb(0,0,255)",
                color: "white",
                padding: "7px 20px",
                borderRadius: "5px",
                letterSpacing: "1.5px",
                fontSize: "19px",
                fontWeight: "500",
              }}
            >
              Add more
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileUpdate2;
