import React from "react";
import PropTypes from "prop-types";

const C1C2 = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 101 78"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M99.6176 23.6853C99.3151 22.5858 98.9326 21.5219 98.4749 20.4953L98.0182 20.6989C97.1219 18.6889 95.9303 16.8246 94.4797 15.1177L94.8607 14.7939C93.4386 13.1206 91.7751 11.5988 89.9049 10.2379L89.6107 10.6422C87.8813 9.3838 85.9691 8.26281 83.9008 7.28778L84.114 6.83551C82.1546 5.91182 80.0591 5.11859 77.85 4.46222L77.7076 4.94151C75.6493 4.32996 73.4894 3.83783 71.2459 3.47095L71.3265 2.97751C69.1808 2.62662 66.9606 2.38949 64.6813 2.27089L64.6553 2.77021C62.4956 2.65783 60.2816 2.65266 58.0268 2.75903L58.0032 2.25959C55.8207 2.36255 53.6007 2.56926 51.3554 2.8835L51.4247 3.37867C49.2728 3.67983 47.097 4.08048 44.9081 4.58409L44.796 4.09682C43.7193 4.34451 42.6396 4.61695 41.5581 4.91451C40.4766 5.21208 39.4094 5.53031 38.3576 5.8682L38.5106 6.34424C36.3721 7.03123 34.2976 7.79997 32.2945 8.64198L32.1008 8.18105C30.0107 9.05962 27.9974 10.0176 26.0694 11.0456L26.3046 11.4868C24.3127 12.5488 22.413 13.6858 20.6147 14.8872L20.3369 14.4714C18.4392 15.7393 16.6527 17.0788 14.9884 18.4779L15.3102 18.8606C13.5701 20.3235 11.9659 21.8513 10.5101 23.4297L10.1426 23.0907C8.58019 24.7847 7.18538 26.5382 5.97423 28.3343L6.38878 28.6138C5.1103 30.5096 4.04067 32.451 3.19843 34.417L2.73884 34.2201C1.82801 36.3461 1.17711 38.5047 0.811122 40.6699L1.30413 40.7533C0.930784 42.962 0.860555 45.1735 1.11863 47.3591L0.622084 47.4177C0.753896 48.534 0.969464 49.6438 1.27198 50.7433C1.57449 51.8428 1.95697 52.9067 2.41473 53.9333L2.87139 53.7297C3.76766 55.7397 4.95925 57.604 6.40992 59.3109L6.02893 59.6347C7.45104 61.308 9.11453 62.8298 10.9847 64.1907L11.2789 63.7864C13.0083 65.0448 14.9204 66.1658 16.9888 67.1408L16.7756 67.5931C18.735 68.5168 20.8305 69.31 23.0396 69.9664L23.182 69.4871C25.2403 70.0986 27.4002 70.5908 29.6437 70.9577L29.563 71.4511C31.7087 71.802 33.929 72.0391 36.2083 72.1577L36.2342 71.6584C38.394 71.7708 40.608 71.7759 42.8628 71.6696L42.8864 72.169C45.0689 72.0661 47.2889 71.8594 49.5342 71.5451L49.4649 71.0499C51.6168 70.7488 53.7926 70.3481 55.9815 69.8445L56.0936 70.3318C57.1702 70.0841 58.25 69.8117 59.3315 69.5141C60.413 69.2165 61.4801 68.8983 62.5319 68.5604L62.379 68.0844C64.5175 67.3974 66.592 66.6286 68.5951 65.7866L68.7888 66.2476C70.8789 65.369 72.8922 64.411 74.8202 63.383L74.585 62.9418C76.5769 61.8798 78.4766 60.7428 80.2749 59.5414L80.5527 59.9572C82.4504 58.6893 84.2369 57.3498 85.9012 55.9507L85.5794 55.568C87.3195 54.1051 88.9237 52.5773 90.3794 50.999L90.747 51.3379C92.3094 49.6439 93.7042 47.8904 94.9154 46.0944L94.5008 45.8148C95.7793 43.919 96.8489 41.9776 97.6912 40.0117L98.1508 40.2085C99.0616 38.0825 99.7125 35.924 100.078 33.7587L99.5855 33.6754C99.9588 31.4666 100.029 29.2551 99.771 27.0695L100.268 27.0109C100.136 25.8946 99.9201 24.7848 99.6176 23.6853Z"
      stroke="#ADFFE4"
      stroke-linejoin="round"
      stroke-dasharray="7 7"
    />
    <circle
      cx="35"
      cy="7"
      r="6.75"
      fill="#1E1E1E"
      stroke="#FE964A"
      stroke-width="0.5"
    />
    <circle cx="35" cy="7" r="3.5" fill="#FE964A" />
    <circle
      cx="32"
      cy="73"
      r="4.75"
      fill="#1E1E1E"
      stroke="#CDFF4D"
      stroke-width="0.5"
    />
    <circle cx="32" cy="73" r="2.5" fill="#CDFF4D" />
  </svg>
);

C1C2.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

C1C2.defaultProps = {
  width: 101,
  height: 78,
  color: "none",
};

export default C1C2;
