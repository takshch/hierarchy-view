import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
const AT_RISK = "AT RISK";
const OF_TRACK = "OF TRACK";
const ON_TRACK = "ON TRACK";

export default function Card(props) {
  const { title, percentage, details, onClick } = props;
  const [status, setStatus] = useState(null);
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (percentage > 70) {
      setStatus(ON_TRACK);
      setTheme("");
    } else if (percentage > 30 && percentage <= 70) {
      setStatus(OF_TRACK);
      setTheme("card--yellow");
    } else if (percentage >= 0 && percentage <= 30) {
      setStatus(AT_RISK);
      setTheme("card--red");
    }
  }, [percentage]);

  return (
    <div className={`card ${theme}`} onClick={onClick}>
      <div className="card__header">
        <span className="card__title">{title}</span>
        <span className="card__percentage-complete">
          <b>{percentage}%</b> complete
        </span>
      </div>
      <div className="card__body">
        <div className="card__details">
          {details
            ? details.map(({ field, value }, index) => {
                return (
                  <React.Fragment key={index}>
                    <span className="card__details-info">
                      {field} - {value}
                    </span>
                  </React.Fragment>
                );
              })
            : "Details Not Available"}
        </div>
        <div className="card__status">{status}</div>
      </div>
      <ProgressBar percentage="50" />
    </div>
  );
}
