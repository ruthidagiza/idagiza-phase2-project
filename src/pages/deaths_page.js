import React, { useEffect } from "react";
import LoadingComponent from "../components/loading-component";
const DeathsPage = (props) => {
  let data = props.data;
  useEffect(() => {
    data.sort((a, b) => b.deaths - a.deaths);
  }, []);
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
        data.map((e) => (
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
                  color: "red",
                }}
              >
                {e.deaths}
              </span>{" "}
              Deaths
            </p>
          </div>
        ))}
    </div>
  );
};

export default DeathsPage;
