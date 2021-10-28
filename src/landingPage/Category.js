import React, { Component } from "react";
import "./SpaceOptimiser.css";
import "./Category.css";
import CategoryIcon from "./CategoryIcon";
import SearchBar from "./SearchBar";

export class Category extends Component {
  render() {
    return (
      <div className="SpaceOptimiser category-container">
        <SearchBar placeHolder={"Category ???"} />
        <div id="category-icon-container">
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
          <CategoryIcon />
        </div>
      </div>
    );
  }
}

export default Category;
