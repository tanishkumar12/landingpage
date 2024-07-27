import React from "react";
import Button from "../Button";

const DetailCard = ({
  title,
  description,
  className,
  enabled,
  btnClass,
  btnContainerClass,
  titleClass,
  descriptionClass,
  comingSoonClass,
  comingSoonContainerClass,
  arrowColor,
}) => {
  return (
    <div className={className}>
      <span className={titleClass}>{title}</span>
      <span className={descriptionClass}>{description}</span>
      {enabled ? (
        <div className={btnContainerClass}>
          <Button title={"Deploy"} className={btnClass} color={arrowColor} />
        </div>
      ) : (
        <div className={comingSoonContainerClass}>
          <span className={comingSoonClass}>Coming Soon</span>
        </div>
      )}
    </div>
  );
};

export default DetailCard;
