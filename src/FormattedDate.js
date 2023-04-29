import React from "react";

function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let fullDate = new Date();
  let year = fullDate.getUTCFullYear();
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      <span>
        {month} {date}, {year} {day}, {hours}:{minutes}
      </span>
    </div>
  );
}

export default FormattedDate;