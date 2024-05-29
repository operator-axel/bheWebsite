"use client";
import React from "react";

export default function Radar() {
  const RadarSVG = () => {
    return (
      <svg
        className="svg-area"
        width="250px"
        height="250px"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(200,200)">
          <circle id="core" cx="0" cy="0" r="6"></circle>
          <circle id="radar" cx="0" cy="0" r="6"></circle>
        </g>
      </svg>
    );
  };
}
