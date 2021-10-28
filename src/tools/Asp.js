import React from "react";
import { useState } from "react";
import "./Asp.css";
import "./AspReference.js";
import AspReference from "./AspReference.js";
import Generate from "./Generate";

const Asp = () => {
  // To hold current dork value
  const [choosedork, setchoosedork] = useState('""');
  // Hold current input value
  const [inputvalue, setinputvalue] = useState("");
  // Hold the last passed input value to generate
  const [generate, setgenerate] = useState("");
  // Hold the last passed dork
  const [currentDork, setcurrentDork] = useState();
  // Hold the generated text to display after algorithm.
  const [displayText, setdisplayText] = useState("");

  function ButtonLabel() {
    if (displayText === "") {
      return "Generate";
    } else {
      return "Insert";
    }
  }
  return (
    <div class="SpaceOptimiser" style={{ minHeight: "calc(100vh - 105px)" }}>
      <div className="asp-ads1">Ads</div>
      {/* input field */}
      <div className="asp-content">
        <div className="asp-heading">Advance Search Pattern (ASP)</div>
        <div className="asp-box">
          <select
            className="asp-box-option"
            onChange={(event) => setchoosedork(event.target.value)}
          >
            {/* <option label="Choose"></option> */}
            <option>""</option>
            <option>author</option>
            <option>group</option>
            <option>insubject</option>
            <option>cache</option>
            <option>define</option>
            <option>ext</option>
            <option>filetype</option>
            <option>id</option>
            <option>inanchor</option>
            <option>info</option>
            {/* <option>inpostauthor</option> */}
            <option>intext</option>
            <option>intitle</option>
            <option>inurl</option>
            <option>link</option>
            <option>location</option>
            <option>related</option>
            <option>site</option>
            <option>source</option>
            <option>allinanchor</option>
            {/* <option>allinpostauthor</option> */}
            <option>allintext</option>
            <option>allintitle</option>
            <option>allinurl</option>
            <option>before</option>
            <option>after</option>
          </select>
          <input
            className="asp-box-if"
            id="inputBoxValue"
            placeholder="Input text here ..."
            onChange={(event) => setinputvalue(event.target.value)}
          />
          <div
            className="asp-generate"
            onClick={() => {
              // set input value in generate
              setgenerate(inputvalue);
              setcurrentDork(choosedork);
            }}
          >
            {/* Generate Button */}
            {ButtonLabel()}
          </div>
        </div>
        {/* Text Area */}
        <div className="asp-result">
          <div
            className="asp-result-area"
            style={{
              whiteSpace: "wrap",
              // overflow: "hidden",
              // textOverflow: "ellipsis",
              wordBreak: "break-word",
            }}
          >
            <Generate
              dork={`${currentDork}`}
              input={`${generate}`}
              dt={displayText}
              df={setdisplayText}
            />
          </div>
          <div className="asp-result-button">
            <div
              style={{
                fontSize: "1.1em",
                fontWeight: "600",
                letterSpacing: "1.25px",
                gridArea: "a",
                width: "100px",
              }}
            >
              {/* &#128269; */}
              View
              {/* &#128065; */}
            </div>

            <div
              style={{
                gridArea: "b",
              }}
            >
              {/* Copy Button */}
              <span
                onClick={() => navigator.clipboard.writeText(displayText)}
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
            </div>
            {/* Refresh button */}
            <div
              onClick={() => {
                // To clear input field
                document.getElementById("inputBoxValue").value = "";
                // To clear input field value stored in variable
                // setinputvalue("");
                // To empty the generated input field
                setgenerate("");
                // To clear display field value stored in variable
                setdisplayText("");
              }}
              style={{
                fontSize: "1.65em",
                fontWeight: "800",
                gridArea: "c",
              }}
            >
              &#128472;
            </div>
          </div>
        </div>
      </div>
      <div className="asp-helper">
        <h2>{choosedork}</h2>
        <br></br>
        <AspReference value={choosedork} />
      </div>
      {/* <div
        style={{ display: "grid", placeItems: "center", margin: "30px 0px" }}
      >
        <iframe
          style={{ width: "48vw", height: "27vw" }}
          src="https://www.youtube.com/embed/u_gOnwWEXiA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default Asp;
