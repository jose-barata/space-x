import React from "react";
import moment from "moment";

export const LaunchItem = ({ item, index }) => {
  //missing rocket name
  const {
    flight_number,
    mission_name,
    launch_date_utc,
    rocket: { rocket_name },
  } = item;

  const formattedLaunchDate = moment.utc(launch_date_utc).format("Do MMM YYYY");

  return (
    <li className="launch-item" key={index}>
      <div className="launch-item__div">
        <span>{`#${flight_number}`}</span>
        <span>{`${mission_name}`}</span>
      </div>
      <div>
        <span className="launch-item__span">
          {/* use moment here */}
          <span>{formattedLaunchDate}</span>
          {/* missing rocket name */}
          <span>{rocket_name}</span>
        </span>
      </div>
    </li>
  );
};
