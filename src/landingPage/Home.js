import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import PublicUserProfileHeader from "../publicUserData/publicUserProfileHeader";
// import "./Section1.css";
// import AdsSpace from "./AdsSpace";
import PreviewBlock from "./PreviewBlock.js";
import _profileimg from "../socialImage/pankaj.jpg";
import CategoryIcon from "./CategoryIcon.js";

const Home = () => {
  var _actor = [];
  for (var i = 0; i < 7; i++) {
    _actor.push(
      <div
        key={i}
        style={{
          // This margin is used for hover expansion space
          // provider to prevent scrolling bar to display
          // 5px for right + 10px for left to maintain "15px" gap
          // margin: "10px 5px 10px 10px",

          // for no expansion on hover
          margin: "0px 5px 10px 10px",
        }}
      >
        <PreviewBlock
          img={_profileimg}
          name={"Pankaj Kumar Chaudhary"}
          username={"pankajkumar"}
          color={"white"}
          backgroundColor={"linear-gradient(180deg,rgba(0,0,0,0.8),rgb(0,0,0)"}
          action={"Like"}
        />
      </div>
    );
  }
  return (
    <div className="SpaceOptimiser">
      {/* <PublicUserProfileHeader /> */}
      {/* <AdsSpace /> */}
      <div id="categoryIconBlockContainer">
        <div id="categoryIconBlock">
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
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
            to="/en/category"
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
      {/* <div
        style={{
          height: "75px",
          display: "grid",
          placeItems: "center",
          margin: "15px 0px",
          background: "white",
        }}
      >
        Suggestion
      </div> */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: "60px auto",
          // For margin above and below category block
          margin: "0px 0px 15px 0px",
          // A mask above lightblue layer for better color effect on top layer
          backgroundColor: "white",
          borderTop: "1px solid black",
          borderRadius: "5px",
        }}
      >
        {/* This div belongs to category header */}
        <div
          style={{
            width: "calc(100% - 20px)",
            // backgroundColor: "rgba(0,255,0,0.3)",
            height: "60px",
            padding: "0px 10px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "26px",
              fontFamily: "Segoe UI",
              letterSpacing: "2px",
              fontWeight: "600",
              color: "black",
            }}
          >
            Influencer
          </span>
          <span
            style={{
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              fontSize: "26px",
              fontFamily: "Segoe UI",
              letterSpacing: "1.5px",
              fontWeight: "bold",
              color: "blue",
            }}
          >
            &#10148;
          </span>
        </div>
        {/* It is for category contents */}
        <div
          style={{
            // backgroundColor: "rgba(0,255,0,0.3)",
            overflow: "auto",
            display: "inline-flex",
            // This padding is used to maintain the 10px gap at end
            // of category block because each integral block has 10px left space
            // only 5px right space
            paddingRight: "5px",
          }}
        >
          {_actor.map(function (value) {
            return value;
          })}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "60px auto",
          // For margin above and below category block
          margin: "15px 0px 15px 0px",
          // A mask above lightblue layer for better color effect on top layer
          backgroundColor: "white",
          borderTop: "1px solid black",
          borderRadius: "5px",
        }}
      >
        {/* This div belongs to category header */}
        <div
          style={{
            width: "calc(100% - 20px)",
            // backgroundColor: "rgba(0,255,0,0.3)",
            height: "60px",
            padding: "0px 10px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "26px",
              fontFamily: "Segoe UI",
              letterSpacing: "2px",
              fontWeight: "600",
              color: "black",
            }}
          >
            Influencer
          </span>
          <span
            style={{
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              fontSize: "26px",
              fontFamily: "Segoe UI",
              letterSpacing: "1.5px",
              fontWeight: "bold",
              color: "blue",
            }}
          >
            &#10148;
          </span>
        </div>
        {/* It is for category contents */}
        <div
          style={{
            // backgroundColor: "rgba(0,255,0,0.3)",
            overflow: "auto",
            display: "inline-flex",
            // This padding is used to maintain the 10px gap at end
            // of category block because each integral block has 10px left space
            // only 5px right space
            paddingRight: "5px",
          }}
        >
          {_actor.map(function (value) {
            return value;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
