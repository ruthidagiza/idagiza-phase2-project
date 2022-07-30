import moment from "moment";
import LoadingComponent from "../components/loading-component";

function StatsPage(props) {
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
          <div key={`${e.name}${e.cases}${e.deaths}`} className="data-row">
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
              span
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
            <p
              style={{
                width: "150px",
                fontSize: "12px",
                lineHeight: "12px",
              }}
            >
              {parseFloat(e.fatalratio) !== 0.0
                ? parseFloat(e.fatalratio).toFixed(2)
                : e.fatalratio}
              %{" "}
              <span
                style={{
                  fontSize: "10px",
                }}
              >
                fatal rate
              </span>{" "}
            </p>
            <p
              style={{
                width: "100px",
                fontSize: "12px",
                lineHeight: "12px",
              }}
            >
              {moment(e.lastupdate).fromNow()}
            </p>
          </div>
        ))}
    </div>
  );
}

export default StatsPage;
