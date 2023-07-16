import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./weatherIcons";
import WeatherTemperature from "./Temperature";



export default function WeatherInfo(props){
    const getDayOfWeek = (date) => {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayIndex = new Date(date).getDay();
      return days[dayIndex];
    };

     const today = new Date().setHours(0, 0, 0, 0); // Get the current date (without time)
     const filteredForecastData = props.forecastData.filter((data) => {
       const forecastDate = new Date(data.dt_txt).setHours(0, 0, 0, 0); // Get the date of the forecast entry (without time)
       return forecastDate !== today && data.dt_txt.includes("12:00"); // Exclude the current date and only include entries for 12:00 PM
     });

      const sixDayForecastData = filteredForecastData.slice(0, 7);

    return (
      <div>
        <div className="row content-section">
          <div className=" col-md-3 col-sm-12 container-details">
            <div className="row section-details-weather">
              <div className="col-sm-12 details-weather">
                <FormattedDate date={props.data.date} />
              </div>
              <div className="col-sm-12 details-weather">
                Wind: {props.data.wind} Km/h
              </div>
              <div className="col-sm-12 details-weather">
                Humidity: {props.data.humidity}
              </div>
            </div>
          </div>
          <div className="temperature-section">
            <div className="col-md-4 forecast-section">
              <span className="city-name">{props.data.city}</span>
            </div>
            <div className="col-md-9 temperature-icon-section">
              <WeatherIcons className="col-md-8" code={props.data.icon} />
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row days-container">
            {sixDayForecastData.map((data, index) => {
              const iconCode = data.weather[0].icon;
              return (
                <div className="col-md-2 days-boxes" key={index}>
                  <h6>{getDayOfWeek(data.dt_txt.split(" ")[0])}</h6>
                  <p>{Math.round(data.main.temp)}°C</p>
                  <WeatherIcons code={iconCode} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
    
}