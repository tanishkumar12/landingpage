import React from "react";
import Star from "../../../assets/images/svgs/Star";

const Card = ({
  title,
  subtitle = "",
  value,
  className,
  titleContainerClass,
  titleClass,
  subtitleClass,
  valueClass,
  showStarIcon,
  starIconClass,
}) => {
  return (
    <div className={className}>
      {showStarIcon ? (
        <div className={starIconClass}>
          <Star />
        </div>
      ) : null}
      <div className={titleContainerClass}>
        <span className={titleClass}>{title}</span>
        <span className={subtitleClass}>{subtitle}</span>
      </div>
      <span className={valueClass}>{value}</span>
    </div>
  );
};

export default Card;
