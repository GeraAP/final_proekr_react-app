import React from "react";
import icon01d from "./icons-weather/01d.png";
import icon01n from "./icons-weather/01n.png";
import icon02d from "./icons-weather/02d.png";
import icon02n from "./icons-weather/02n.png";
import icon03d from "./icons-weather/03d.png";
import icon03n from "./icons-weather/03n.png";
import icon04d from "./icons-weather/04d.png";
import icon04n from "./icons-weather/04n.png";
import icon09d from "./icons-weather/09d.png";
import icon09n from "./icons-weather/09n.png";
import icon10d from "./icons-weather/10d.png";
import icon10n from "./icons-weather/10n.png";
import icon11d from "./icons-weather/11d.png";
import icon11n from "./icons-weather/11n.png";
import icon13d from "./icons-weather/13d.png";
import icon13n from "./icons-weather/13n.png";
import icon50d from "./icons-weather/50d.png";
import icon50n from "./icons-weather/50n.png";

export default function WeatherIcons(props){
  const iconMap = {
    "01d": icon01d,
    "01n": icon01n,
    "02d": icon02d,
    "02n": icon02n,
    "03d": icon03d,
    "03n": icon03n,
    "04d": icon04d,
    "04n": icon04n,
    "09d": icon09d,
    "09n": icon09n,
    "10d": icon10d,
    "10n": icon10n,
    "11d": icon11d,
    "11n": icon11n,
    "13d": icon13d,
    "13n": icon13n,
    "50d": icon50d,
    "50n": icon50n,
  };
  return <img src={iconMap[props.code]} alt="/" />;
};