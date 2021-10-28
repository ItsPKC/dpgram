import React from "react";
import "./publicUserProfileHeader.css";
import logo from "../socialImage/logo.svg";
import profileImage from "../socialImage/pankaj.jpg";

const PublicUserProfileHeader = () => {
  return (
    <div className="profile-section-container">
      {/* Profile Image and Description */}
      <div className="profile-section">
        <div
          className="profile-copy-button-mobile"
          style={{
            position: "absolute",
            top: "60px",
            right: "7.5px",
            color: "red",
          }}
        >
          <span
            onClick={() =>
              navigator.clipboard.writeText(
                "https://icyindia.com/pankajchaudhary"
              )
            }
          >
            {/* <p>&#128203;</p> */}
            {/* <p>&#10998;</p> */}
            <p>&#x1F517;</p>
          </span>
        </div>
        <div style={{ gridArea: "content1" }} className="profile-image-grid">
          <img className="profile-image" alt="icyindia" src={profileImage} />
          <span
            onClick={() => console.log("pankaj kumar")}
            className="profile-follow-button"
          >
            <p>Follow</p>
          </span>
        </div>
        <div style={{ gridArea: "content2" }} className="profile-summary">
          <div className="profile-intro">
            <p id="profile-name">Pankaj Kumar Chaudhary</p>
            <span className="verifyBadge">
              <img alt="pankaj" src={logo} />
            </span>
            <p id="profile-link">
              <span className="profile-link-text">
                {/* Change at both place */}
                pankajchaudhary
              </span>
              <span
                onClick={() =>
                  navigator.clipboard.writeText(
                    "https://icyindia.com/pankajchaudhary"
                  )
                }
                style={{
                  fontSize: ".875em",
                  marginRight: ".125em",
                  position: "relative",
                  top: "-.25em",
                  left: "-.0675em",
                }}
              >
                📄
                <span
                  style={{ position: "absolute", top: ".25em", left: ".25em" }}
                >
                  📄
                </span>
              </span>
            </p>
          </div>
          <div className="profile-bio">
            <div
              style={{
                justifySelf: "left",
                fontSize: "18px",
                fontWeight: "600",
                letterSpacing: "1px",
                color: "blue",
              }}
            >
              -- Student
            </div>
            <div>
              {/* <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  color: "blue",
                }}
              >
                Favourites :{" "}
              </span> */}
              <span>
                <img alt="icy india" src={logo} />
                <span className="favouriteImpact">Youtube</span>
              </span>
              <span>
                <img alt="icy india" src={logo} />
                <span className="favouriteImpact">Tiktok</span>
              </span>
              <span>
                <img alt="icy india" src={logo} />
                <span className="favouriteImpact">Instagram</span>
              </span>
            </div>
          </div>
          <div className="profile-statistics">
            <p style={{ marginRight: "5px" }}>
              <span className="summary-stats">59</span>
              <span>Impact</span>
            </p>
            <p style={{ margin: "0px 5px" }}>
              <span className="summary-stats">99.9 K</span>
              <span>Follower</span>
            </p>
            <p style={{ marginLeft: "5px" }}>
              <span className="summary-stats">999.9 M</span>
              <span>View</span>
            </p>
          </div>
          <div className="profile-navigation">
            <div>Overview</div>
            <div>Gallery</div>
            <div>&#x24D8; About</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicUserProfileHeader;
