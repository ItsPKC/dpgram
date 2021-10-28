import React from "react";
import "./Menu.css";
import logo from "../socialImage/logo.svg";

const Menu = (props) => {
  console.log(props.value);
  return (
    <div>
      <div
        id="simpleFilter"
        className="filter"
        style={{ display: props.value ? "block" : "none" }}
      >
        <div className="filter-content">
          <div className="filter-header">
            <span className="cancelFilter" onClick={props.menuController}>
              &#10006;
            </span>
          </div>
          <div className="filter-body">
            <img alt="icy india" src={logo} className="menu-logo"></img>

            <a href="#services" className="menu-content">
              Android Apps
            </a>
            <a href="#clients" className="menu-content">
              iOS Apps
            </a>
            <a href="#about" className="menu-content">
              Websites
            </a>
            <a href="#clients" className="menu-content">
              Suggest
            </a>

            {/* <button className="dropdown-btn">
              Release Date <span className="down-arrow-in-dropdown">&#9776;</span>
            </button>
            <div
              className="dropdown-container"
              style={{ maxHeight: "35%", overflow: "auto" }}
            >
              <form action="/action_page.php" method="GET">
                <input type="checkbox" name="year<=1980" /> qwert<br></br>
                <input type="checkbox" name="year=1981" /> asdfg<br></br>
                <input type="checkbox" name="year<=1980" /> zxcvb<br></br>
              </form>
            </div>
            <a href="#contact">Search</a> */}
          </div>

          <div className="filter-footer" onClick={props.menuController}>
            <div>Close</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
