import React from "react";

const PUBasicDetails = () => {
  return (
    <div
      className="SpaceOptimiser"
      style={{
        minHeight: "calc(100vh - 105px)",
      }}
    >
      <div style={{ paddingTop: "20px" }}>
        <span>Name</span>
        <div
          style={{
            padding: "10px 0px 20px 0px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "10px",
          }}
        >
          <input
            placeholder="First Name"
            style={{
              border: "none",
              outline: "none",
              height: "40px",
              backgroundColor: "white",
              padding: "0px 10px",
              borderRadius: "5px",
            }}
          />
          <input
            placeholder="Last Name"
            style={{
              border: "none",
              outline: "none",
              height: "40px",
              backgroundColor: "white",
              padding: "0px 10px",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
      <div>
        <p>username</p>
        <input
          placeholder="username"
          style={{
            marginTop: "10px",
            border: "none",
            outline: "none",
            height: "40px",
            backgroundColor: "white",
            padding: "0px 10px",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default PUBasicDetails;
