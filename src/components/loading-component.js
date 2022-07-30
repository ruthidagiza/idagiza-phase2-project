import React from "react";
import { ScaleLoader } from "react-spinners";
const LoadingComponent = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ScaleLoader />
      <h2
        style={{
          lineHeight: "5px",
          padding: "0px",
          margin: "4px",
          marginTop: "10px",
        }}
      >
        Loading ...
      </h2>
      <p
        style={{
          lineHeight: "15px",
          padding: "0px",
          margin: "4px",
          marginTop: "10px",
        }}
      >
        please be patient <br /> loading big data
      </p>
      <p
        style={{
          lineHeight: "10px",
          fontSize: "9px",
          marginTop: "10px",
        }}
      >
        loading all countries might take maximum of 2minutes
      </p>
    </div>
  );
};

export default LoadingComponent;
