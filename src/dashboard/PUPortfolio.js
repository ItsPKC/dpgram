import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../landingPage/SpaceOptimiser.css";
import PlatformIcon from "./PlatformIcon";

const PUPortfolio = () => {
  var { id } = useParams();
  useEffect(() => {
    document.getElementById("platform-name").value = id;
    console.log(id);
  });
  return (
    <div
      className="SpaceOptimiser"
      style={{
        // 50-header , 55-footer , 15-header-bottom-margin
        minHeight: "calc(100vh - 120px)",
      }}
    >
      <div id="categoryIconBlockContainer">
        <div id="categoryIconBlock">
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          <PlatformIcon />
          {/* Start Last Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr",
              paddingRight: "10px",
            }}
          >
            <Link
              to="/en/category"
              style={{
                minWidth: "100px",
                borderRadius: "3px",
                background:
                  "linear-gradient(180deg,rgba(0,0,0,0.7),rgba(0,0,0,1)",
                display: "grid",
                placeItems: "center",
                sgridTemplateRows: "1fr 1fr 1fr",
                textDecoration: "none",
              }}
            >
              <div></div>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  fontSize: "28px",
                  color: "white",
                }}
              >
                ➤
              </div>
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "500",
                  letterSpacing: "1.25px",
                }}
              >
                more ??
              </div>
            </Link>
          </div>
        </div>
        {/* End of Last Grid i.e more ?? */}
        <div id="categoryFooter">
          <div
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <span
              id="categoryFooter-scrollButton-left"
              style={{
                cursor: "pointer",
                padding: "9px 15px 11px 15px",
                backgroundColor: "rgb(0,0,0,0.1)",
                borderBottomLeftRadius: "5px",
              }}
              onClick={() => {
                // var width = window.innerWidth;
                // console.log(width);
                // console.log(
                //   document.getElementById("categoryIconBlock").clientWidth
                // );
                document.getElementById("categoryIconBlock").scrollLeft -= 300;
              }}
            >
              {"<"}
            </span>
          </div>
          <Link
            to="/en/platform"
            style={{
              textDecoration: "none",
              display: "grid",
              placeItems: "center",
            }}
          >
            <div
              id="categoryIconBlockViewAll"
              style={{ textDecoration: "none" }}
            >
              <span
                id="categoryIconBlockViewAllIcon"
                style={{ textDecoration: "none" }}
              >
                ➤
              </span>
              <span
                id="categoryIconBlockViewAllText"
                style={{ textDecoration: "none" }}
              >
                View All
              </span>
            </div>
          </Link>
          <div
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <span
              id="categoryFooter-scrollButton-right"
              style={{
                cursor: "pointer",
                padding: "9px 15px 11px 15px",
                backgroundColor: "rgb(0,0,0,0.1)",
                borderBottomRightRadius: "5px",
              }}
              onClick={() => {
                // var width = window.innerWidth;
                // console.log(width);
                // console.log(
                //   document.getElementById("categoryIconBlock").clientWidth
                // );
                document.getElementById("categoryIconBlock").scrollLeft += 300;
              }}
            >
              {">"}
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "40px 10px 10px 10px",
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: "20px",
          placeItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "125px minmax(auto,350px)",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Segoe UI",
              fontWeight: "600",
              fontSize: "17px",
              letterSpacing: "1.5px",
            }}
          >
            Platform :
          </div>
          <form
            style={{
              padding: "0px 5px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <select
              id="platform-name"
              style={{
                border: "none",
                outline: "none",
                height: "40px",
                width: "calc(100%)",
                backgroundColor: "white",
                // **************************
                fontFamily: "Segoe UI",
                fontSize: "16px",
                fontWeight: "600",
                letterSpacing: "1.25px",
              }}
            >
              <option value="addmore">Choose</option>
              <option value="Chingari">Chingari</option>
              <option value="Facebook">Facebook</option>
              <option value="GitHub">Github</option>
              <option value="Instagram">Instagram</option>
              <option value="Koo">Koo</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Reddit">Reddit</option>
              <option value="Shorts">Shorts</option>
              <option value="Snapchat">Snapchat</option>
              <option value="TakaTak">TakaTak</option>
              <option value="Telegram">Telegram</option>
              <option value="TikTok">TikTok</option>
              <option value="Twitter">Twitter</option>
              <option value="Vigo Video">Vigo Video</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="YouTube">YouTube</option>
            </select>
          </form>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "125px minmax(auto,350px)",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Segoe UI",
              fontWeight: "600",
              fontSize: "17px",
              letterSpacing: "1.5px",
            }}
          >
            Username :
          </div>
          <input
            placeholder="username"
            style={{
              display: "grid",
              width: "calc(100% - 20px)",
              border: "none",
              outline: "none",
              height: "40px",
              backgroundColor: "white",
              padding: "0px 10px",
              borderRadius: "5px",
              // ***************************
              fontFamily: "Segoe UI",
              fontWeight: "600",
              fontSize: "16px",
              letterSpacing: "1.5px",
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "125px minmax(auto,350px)",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Segoe UI",
              fontWeight: "600",
              fontSize: "17px",
              letterSpacing: "1.5px",
            }}
          >
            Profile Link :
          </div>
          <input
            placeholder="https://example.com/..."
            style={{
              display: "grid",
              width: "calc(100% - 20px)",
              border: "none",
              outline: "none",
              height: "40px",
              backgroundColor: "white",
              padding: "0px 10px",
              borderRadius: "5px",
              // ***************************
              fontFamily: "Segoe UI",
              fontWeight: "600",
              fontSize: "16px",
              letterSpacing: "1.5px",
            }}
          />
        </div>
        <button
          style={{
            cursor: "pointer",
            border: "none",
            outline: "none",
            backgroundColor: "red",
            color: "white",
            width: "125px",
            height: "40px",
            marginTop: "20px",
            borderRadius: "5px",
            // ***********************
            fontFamily: "Segoe UI",
            fontSize: "18px",
            fontWeight: "500",
            letterSpacing: "2px",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PUPortfolio;
