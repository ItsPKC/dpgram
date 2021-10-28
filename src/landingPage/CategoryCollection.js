import React from "react";
import { useParams } from "react-router";
import "./SpaceOptimiser.css";
import SearchBar from "./SearchBar";
import PreviewBlock from "./PreviewBlock";
import _profileimg from "../socialImage/pankaj.jpg";

// Collection of Personality in a particular category

const CategoryCollection = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="SpaceOptimiser">
      <SearchBar placeHolder={"username (insta, fb, twitter, ...)"} />
      <div className="container">
        <PreviewBlock
          img={_profileimg}
          name={"Pankaj Kumar Chaudhary"}
          username={"pankajkumar"}
          color={"white"}
          backgroundColor={"linear-gradient(180deg,rgba(0,0,0,0.8),rgb(0,0,0)"}
          action={"Like"}
        />
        <PreviewBlock
          img={_profileimg}
          name={"Pankaj Kumar Chaudhary"}
          username={"pankajkumar"}
          color={"white"}
          backgroundColor={"linear-gradient(180deg,rgba(0,0,0,0.8),rgb(0,0,0)"}
          action={"Like"}
        />
        <PreviewBlock
          img={_profileimg}
          name={"Pankaj Kumar Chaudhary"}
          username={"pankajkumar"}
          color={"white"}
          backgroundColor={"linear-gradient(180deg,rgba(0,0,0,0.8),rgb(0,0,0)"}
          action={"Like"}
        />
        <PreviewBlock
          img={_profileimg}
          name={"Pankaj Kumar Chaudhary"}
          username={"pankajkumar"}
          color={"white"}
          backgroundColor={"linear-gradient(180deg,rgba(0,0,0,0.8),rgb(0,0,0)"}
          action={"Like"}
        />
        <PreviewBlock
          img={_profileimg}
          name={"Pankaj Kumar Chaudhary"}
          username={"pankajkumar"}
          color={"white"}
          backgroundColor={"linear-gradient(180deg,rgba(0,0,0,0.8),rgb(0,0,0)"}
          action={"Like"}
        />
        <PreviewBlock
          img={_profileimg}
          name={"Pankaj Kumar Chaudhary"}
          username={"pankajkumar"}
          color={"white"}
          backgroundColor={"linear-gradient(180deg,rgba(0,0,0,0.8),rgb(0,0,0)"}
          action={"Like"}
        />
      </div>
    </div>
  );
};

export default CategoryCollection;
