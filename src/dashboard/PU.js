import React from "react";
import { useParams } from "react-router";
import PUBasicDetails from "./PUBasicDetails";
import PUCred from "./PUCred";
import PUDp from "./PUDp";
import PUPortfolio from "./PUPortfolio";

const PU = () => {
  const { id } = useParams();
  console.log(id);
  if (id === "pu-basic-details") {
    return <PUBasicDetails />;
  } else if (id === "pu-cred") {
    return <PUCred />;
  } else if (id === "pu-dp") {
    return <PUDp />;
  } else if (id === "pu-portfolio") {
    return <PUPortfolio />;
  } else {
    return <div>404</div>;
  }
};

export default PU;
