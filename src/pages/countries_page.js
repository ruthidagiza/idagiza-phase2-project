import moment from "moment";
import React from "react";
import LoadingComponent from "../components/loading-component";

const CountriesPage = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: props.loading ? "center" : "",
        alignItems: "center",
        height: "100%",
        overflow: "scroll",
      }}
    >
      {props.loading && <LoadingComponent />}
      {!props.loading && props.data.length < 1 && <p>No Data Found</p>}
      {!props.loading &&
        props.data.map((e) => (
          <div key={e.name} className="data-row">
            <p
              style={{
                width: "190px",
                color: "green",
                fontSize: "14px",
                lineHeight: "12px",
              }}
            >
              {e.name}
            </p>
            <p
              style={{
                width: "150px",

                fontSize: "12px",
                lineHeight: "12px",
              }}
            >
              <span
                style={{
                  color: "#fb923c",
                }}
              >
                {e.cases}
              </span>{" "}
              cases
            </p>
          </div>
        ))}
    </div>
  );
};

export default CountriesPage;
