import React from "react";
import images from "./../../../../../../assets/images/Group.svg";

const Images = ({ classname }) => {
  return (
    <div className={classname}>
      <img src={images} alt="group" />
    </div>
  );
};

export default Images;
