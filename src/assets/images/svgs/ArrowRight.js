import React from "react";
import PropTypes from "prop-types";

const ArrowRight = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.04492C6.48 2.04492 2 6.52492 2 12.0449C2 17.5649 6.48 22.0449 12 22.0449C17.52 22.0449 22 17.5649 22 12.0449C22 6.52492 17.52 2.04492 12 2.04492ZM16.03 12.5749L13.03 15.5749C12.88 15.7249 12.69 15.7949 12.5 15.7949C12.31 15.7949 12.12 15.7249 11.97 15.5749C11.68 15.2849 11.68 14.8049 11.97 14.5149L13.69 12.7949H8.5C8.09 12.7949 7.75 12.4549 7.75 12.0449C7.75 11.6349 8.09 11.2949 8.5 11.2949H13.69L11.97 9.57492C11.68 9.28492 11.68 8.80492 11.97 8.51492C12.26 8.22492 12.74 8.22492 13.03 8.51492L16.03 11.5149C16.32 11.8049 16.32 12.2849 16.03 12.5749Z"
      fill={color}
    />
  </svg>
);

ArrowRight.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

ArrowRight.defaultProps = {
  width: 24,
  height: 25,
  color: "white",
};

export default ArrowRight;
