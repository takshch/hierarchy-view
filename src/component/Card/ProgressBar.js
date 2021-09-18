import React from "react";
import Card from ".";

export default function ProgressBar({ percentage }) {
  return (
    <div className="card__progress-bar">
      <span
        className="card__progress-bar-fill"
        style={{ width: `${percentage}%` }}
      ></span>
    </div>
  );
}
