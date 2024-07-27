import React from "react";
import ArrowRight from "../../../assets/images/svgs/ArrowRight";

const Button = ({ className, title, color }) => {
  return (
    <div className={className}>
      {title} <ArrowRight color={color} />
    </div>
  );
};

export default Button;
