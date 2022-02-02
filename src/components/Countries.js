import axios from "axios";
import React, { useState, useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
    console.log(countries);
  return (
    <div className="container mt-3">
      {countries.map((value, index) => {
        return (
          <div key={index}class="accordion" id="accordionExample">
            <div class="card m-2">
              <div class="card-header" id={index}>
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target={`#${value.name.common}`}
                    aria-expanded="true"
                    aria-controls={value.name.common}
                  >
                    <h3>{value.name.common} ({value.timezones[0]})</h3>
                  </button>
                </h2>
              </div>

              <div
                id={value.name.common}
                class="collapse "
                aria-labelledby={index}
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <div class="container">
                    <div class="row">

                      <div class="col-sm">
                          <div>Continent: {value.continents}</div>
                          <div>Capital: {value.capital}</div>
                      </div>
                      <div class="col-sm">
                          <div>Region: {value.region}</div>
                          <div>Car Side: {value.car.side}</div>
                         
                      </div>
                      <div class="col-sm">
                           <a href={value.maps.googleMaps} target="_blank"> Click to Show Map</a>
                           <div>Flag: {value.flag}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;

