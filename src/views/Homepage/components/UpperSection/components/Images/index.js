import React from "react";
import styles from "./styles.module.css";
import image1 from "./../../../../../../assets/images/Rectangle 161123944.svg";
import image2 from "./../../../../../../assets/images/Rectangle 161123945.svg";
import image3 from "./../../../../../../assets/images/Rectangle 161123942.svg";
import image4 from "./../../../../../../assets/images/Rectangle 161123946.svg";
import image5 from "./../../../../../../assets/images/Rectangle 161123941.svg";
import image6 from "./../../../../../../assets/images/Rectangle 161123943.svg";
import drawing1 from "./../../../../../../assets/images/Group 39881.svg";
import drawing2 from "./../../../../../../assets/images/Group 427319595.svg";
import drawing3 from "./../../../../../../assets/images/Group 39887.svg";

const Images = ({ classname }) => {
  return (
    <div className={classname}>
      <div className={styles.images}>
        <img src={image1} alt="image1" className={styles.image1} />
        <img src={image2} alt="image2" className={styles.image2} />
        <img src={image3} alt="image3" className={styles.image3} />
        <img src={image4} alt="image4" className={styles.image4} />
        <img src={image5} alt="image5" className={styles.image5} />
        <img src={image6} alt="image6" className={styles.image6} />
        <img src={drawing1} alt="drwaing1" className={styles.drawing1} />
        <img src={drawing2} alt="drwaing2" className={styles.drawing2} />
        <img src={drawing3} alt="drwaing3" className={styles.drawing3} />
      </div>
    </div>
  );
};

export default Images;
