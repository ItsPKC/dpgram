import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div id="category-container-search-box-container">
      <div id="category-container-search-box">
        <input type="text" placeholder={props.placeHolder} />
        <div
          style={{
            justifySelf: "flex-start",
            cursor: "pointer",
            width: "45px",
            height: "45px",
            backgroundColor: "white",
            display: "grid",
            placeItems: "center",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
            paddingRight: "5px",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          &#x1F50D;
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
