import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUsPage from "./pages/about_us";
import CountriesPage from "./pages/countries_page";
import StatsPage from "./pages/statistics_page";
import DeathsPage from "./pages/deaths_page";
import axios from "axios";
import CountryData from "./models/country_data";
function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchCovidData = async () => {
    try {
      console.log("fetching");
      setLoading(true);
      let res = await axios.get("https://coronavirus.m.pipedream.net/");
      console.log("finished");
      var countriesmap = new Map();

      res.data.rawData.forEach((e, i) => {
        if (countriesmap.has(e.Country_Region)) {
        } else {
          countriesmap.set(
            e.Country_Region,
            new CountryData(
              e.Country_Region,
              e.Confirmed,
              e.Deaths,
              e.Last_Update,
              e.Case_Fatality_Ratio
            )
          );
        }
      });
      setData([...countriesmap.values()]);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (data.length < 10) {
      fetchCovidData();
    }
  }, []);
  return (
    <Router>
      <div className="app ">
        <div style={{ width: "100%", height: "70px" }}></div>
        <div className="navbar">
          <div className="brand">
            {" "}
            <h2>Covid 19</h2> <h3>Statistics</h3>
          </div>
          <div className="nav-links">
            <Link to={"/"} className="nav-link">
              <h4>Home</h4>
            </Link>
            <Link to={"/countries"} className="nav-link">
              <h4>Countries</h4>
            </Link>
            <Link to={"/deaths"} className="nav-link">
              <h4>Deaths</h4>
            </Link>
            <Link to={"/about"} className="nav-link">
              <h4>About Us</h4>
            </Link>
          </div>
        </div>
        <Routes>
          <Route exact path="/about" element={<AboutUsPage />} />
          <Route
            exact
            path="/countries"
            element={<CountriesPage loading={loading} data={data} />}
          />
          <Route
            exact
            path="/deaths"
            element={<DeathsPage loading={loading} data={data} />}
          />
          <Route
            exact
            path="/"
            element={<StatsPage loading={loading} data={data} />}
          />
        </Routes>
        <div style={{ fontSize: "11px", display: "flex", flex: 1 }}></div>
        <div style={{ width: "100%", height: "13px" }}></div>
        <div className="footer">
          <p style={{ fontSize: "11px" }}>
            covid 19 tracker all rights reserved
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;
