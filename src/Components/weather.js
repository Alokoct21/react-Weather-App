import React, { useState } from "react";
import axios from "axios";

import "./weather.css";

function Weather() {
  const [city, setData] = useState("");

  const [temp, setTemp] = useState("");

  const [humidity, setHumi] = useState("");

  const [cloud, SetCloud] = useState("");

  function getdata() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c8d7dfe6cf8d6a191457143b255fd753&units=metric`
      )
      .then((responce) => {
        setTemp(responce.data.main.temp);
        setHumi(responce.data.main.humidity);
        SetCloud(responce.data.weather[0].description);
      });
  }

  return (
    <section className="vh-100">
     
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <h3 className="mb-4 pb-2 fw-normal text-white">
              Check the weather forecast
            </h3>
            <div className="input-group rounded mb-3">
              <input
                onChange={(e) => setData(e.target.value)}
                type="search"
                className="form-control rounded"
                placeholder="City"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <a href="#!" type="button" onClick={getdata}>
                <span
                  className="input-group-text border-0 fw-bold"
                  id="search-addon"
                >
                  Check!
                </span>
              </a>
            </div>
            <div className="mb-4 pb-2"></div>

            <div className="card shadow-0 border">
              <div className="card-body p-4">
                <h4 className="mb-1 sfw-normal">{city}</h4>
                <p className="mb-2">
                  Current temperature: <strong>{temp}°C</strong>
                </p>
                <p>
                  Humidity: <strong>{humidity}%</strong>
                </p>
                <div className="d-flex flex-row align-items-center">
                  <p className="mb-0 me-4">Scattered:<strong> {cloud}</strong> </p>
                  <i className="fas fa-cloud fa-3x" style={{ color: "#eee" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;

//
