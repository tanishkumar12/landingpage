import React from "react";
import PropTypes from "prop-types";

const Star = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 47 48"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.5 1.5V46.5"
      stroke="url(#paint0_linear_1_5418)"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M1 24L46 24"
      stroke="url(#paint1_linear_1_5418)"
      stroke-width="2"
      stroke-linecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_5418"
        x1="24"
        y1="1.5"
        x2="24"
        y2="46.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" stop-opacity="0" />
        <stop offset="0.5" stop-color="#1E1E1E" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_5418"
        x1="1"
        y1="24"
        x2="46"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" stop-opacity="0" />
        <stop offset="0.505" stop-color="#1E1E1E" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
    </defs>
  </svg>
);

Star.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Star.defaultProps = {
  width: 47,
  height: 48,
  color: "none",
};

export default Star;
