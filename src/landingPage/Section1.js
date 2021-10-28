import React from "react";
// import { useParams } from "react-router";
import "./Section1.css";
import "./SpaceOptimiser.css";
import PublicUserProfileHeader from "../publicUserData/publicUserProfileHeader";
import SectionBlock from "./SectionBlock";
import AdsSpace from "./AdsSpace";
import PreviewBlock from "./PreviewBlock";
import _facebook from "../socialImage/facebook.svg";
import _koo from "../socialImage/koo.svg";
import _linkedin from "../socialImage/linkedin.svg";
import _twitter from "../socialImage/twitter.svg";
import _whatsApp from "../socialImage/whatsapp.svg";
import _logo from "../socialImage/logo.svg";
import _youtube from "../socialImage/youtube.svg";
import _instagram from "../socialImage/instagram.png";
import _reddit from "../socialImage/reddit.svg";
import _github from "../socialImage/github.svg";
import _snapchat from "../socialImage/snapchat.svg";
import _chingari from "../socialImage/chingari.webp";
import _tiktok from "../socialImage/tiktok.svg";
import _shorts from "../socialImage/shorts.svg";
import _vigovideo from "../socialImage/vigovideo.png";
import _mxtakatak from "../socialImage/mxtakatak.png";
import _profileimg from "../socialImage/pankaj.jpg";
const Section1 = () => {
  // const { id } = useParams();
  // if (id != null) {
  //   return <div>{id}</div>;
  // }
  var _actor = [];
  var _influencer = [];
  for (var i = 0; i < 7; i++) {
    _actor.push(
      <div
        key={i}
        style={{
          // This margin is used for hover expansion space
          // provider to prevent scrolling bar to display
          // 5px for right + 10px for left to maintain "15px" gap
          margin: "10px 5px 10px 10px",
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

  for (var j = 0; j < 7; j++) {
    _influencer.push(
      <div
        key={i}
        style={{
          // This margin is used for hover expansion space
          // provider to prevent scrolling bar to display
          // 5px for right + 10px for left to maintain "15px" gap
          margin: "10px 5px 10px 10px",
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
    <div>
      <PublicUserProfileHeader />
      <div className="SpaceOptimiser">
        <AdsSpace />
        <section2 className="container">
          <SectionBlock
            img={_facebook}
            color={"white"}
            // backgroundColor={"rgb(24, 119, 242)"}
            backgroundColor={
              "linear-gradient(180deg,rgba(24, 119, 242,0.8),rgb(24, 119, 242))"
            }
            t={"Facebook"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"View"}
          />
          <SectionBlock
            img={_youtube}
            color={"white"}
            backgroundColor={
              "linear-gradient(180deg,rgba(255,0,0,0.8),rgb(255,0,0))"
            }
            t={"YouTube"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Subscribe"}
          />
          <SectionBlock
            img={_twitter}
            color={"white"}
            // backgroundColor={"rgb(29, 161, 242)"}
            backgroundColor={
              "linear-gradient(180deg,rgba(29, 161, 242,0.8),rgb(29, 161, 242))"
            }
            t={"Twitter"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Follow"}
          />
          <SectionBlock
            img={_whatsApp}
            color={"white"}
            // Current logo color
            // backgroundColor={"rgb(12,149,21)"}
            // Original logo color
            // backgroundColor={"rgb(70,219,82)"}
            // Original
            // backgroundColor={"rgb(7,188,76)"}
            backgroundColor={
              "linear-gradient(180deg,rgba(7,188,76,0.8),rgb(7,188,76))"
            }
            t={"WhatsApp"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Chat"}
          />
          <SectionBlock
            img={_logo}
            color={"white"}
            backgroundColor={
              "linear-gradient(180deg,rgba(0,0,0,0.8),rgb(0,0,0))"
            }
            t={"Icy India"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Check"}
          />
          <SectionBlock
            img={_instagram}
            color={"white"}
            backgroundColor={
              "linear-gradient(135deg,blue,rgb(175, 6, 175),rgb(255, 60, 0),orange,rgb(255, 102, 0))"
            }
            t={"Instagram"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Follow"}
          />
          <SectionBlock
            img={_linkedin}
            color={"white"}
            // backgroundColor={"rgb(10, 102, 194)"}
            backgroundColor={
              "linear-gradient(180deg,rgba(10, 102, 194,0.8),rgb(10, 102, 194))"
            }
            t={"LinkedIn"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Connect"}
          />
          <SectionBlock
            img={_koo}
            color={"white"}
            // backgroundColor={"rgb(250,205,0)"}
            backgroundColor={
              "linear-gradient(90deg,rgb(250,205,0),rgb(250,170,0),rgb(250,170,0),rgb(250,205,0))"
            }
            t={"Koo"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Follow"}
          />
          <SectionBlock
            img={_reddit}
            color={"white"}
            // backgroundColor={"rgb(250,205,0)"}
            backgroundColor={
              "linear-gradient(180deg,rgba(255,69,0,0.8),rgb(255,69,0))"
            }
            t={"Reddit"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Follow"}
          />
          <SectionBlock
            img={_github}
            color={"white"}
            // backgroundColor={"rgb(250,205,0)"}
            backgroundColor={
              "linear-gradient(180deg,rgba(0,0,0,0.8),rgb(0,0,0))"
            }
            t={"GitHub"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Follow"}
          />
          <SectionBlock
            img={_snapchat}
            color={"white"}
            // backgroundColor={"rgb(255,255,0)"}
            backgroundColor={
              "linear-gradient(90deg,rgb(255,255,0),rgb(250,205,0),rgb(250,205,0),rgb(255,255,0))"
            }
            t={"Snapchat"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Follow"}
          />
          <SectionBlock
            img={_chingari}
            color={"white"}
            // backgroundColor={"rgb(250,205,0)"}
            backgroundColor={
              "linear-gradient(180deg,rgba(44,17,51,0.8),rgb(44,17,51))"
            }
            t={"Chingari"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Follow"}
          />
          <SectionBlock
            img={_tiktok}
            color={"white"}
            // backgroundColor={"rgb(250,205,0)"}
            backgroundColor={
              "linear-gradient(180deg,rgba(0,0,0,0.8),rgb(0,0,0))"
            }
            t={"Tiktok"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Follow"}
          />
          <SectionBlock
            img={_shorts}
            color={"white"}
            backgroundColor={
              "linear-gradient(180deg,rgba(255,0,0,0.8),rgb(255,0,0))"
            }
            t={"Shorts"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Subscribe"}
          />
          <SectionBlock
            img={_vigovideo}
            color={"white"}
            backgroundColor={
              "linear-gradient(180deg,rgba(252,102,0,0.8),rgb(252,102,0))"
            }
            t={"Vigo Video"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Subscribe"}
          />
          <SectionBlock
            img={_mxtakatak}
            color={"white"}
            backgroundColor={
              "linear-gradient(180deg,rgba(0,0,0,0.8),rgb(0,0,0))"
            }
            t={"TakTak"}
            t1={"Welcome"}
            t2={"It's under development."}
            t3={"We'll back to you very soon."}
            username={"@pankajkumarchau"}
            action={"Subscribe"}
          />
        </section2>
        <AdsSpace />
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateRows: "50px auto",
              // For margin above and below category block
              margin: "15px 0px 30px 0px",
            }}
          >
            {/* This div belongs to category header */}
            <div
              style={{
                width: "100%",
                backgroundColor: "lightgreen",
                height: "50px",
              }}
            ></div>
            {/* It is for category contents */}
            <div
              style={{
                backgroundColor: "lightgreen",
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
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateRows: "50px auto",
              // For margin above and below category block
              margin: "15px 0px 30px 0px",
            }}
          >
            {/* This div belongs to category header */}
            <div
              style={{
                width: "100%",
                backgroundColor: "lightgreen",
                height: "50px",
              }}
            ></div>
            {/* It is for category contents */}
            <div
              style={{
                backgroundColor: "lightgreen",
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
        <AdsSpace />
      </div>
    </div>
  );
};

export default Section1;
