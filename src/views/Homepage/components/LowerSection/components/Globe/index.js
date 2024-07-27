import React from "react";
import styles from "./styles.module.css";
import globe from "./../../../../../../assets/images/globe.svg";
import c1 from "./../../../../../../assets/images/Ellipse 2724.svg";
import c2 from "./../../../../../../assets/images/Ellipse 2715.svg";
import C1C2 from "../../../../../../assets/images/svgs/C1C2";
import MultiConnector from "../../../../../../assets/images/svgs/MutliConnector";
import c3 from "./../../../../../../assets/images/Ellipse 2712.svg";
import c4 from "./../../../../../../assets/images/Ellipse 2718.svg";
import c5 from "./../../../../../../assets/images/Ellipse 2716.svg";
import Emoji1 from "../../../../../../assets/images/Page 1.svg";
import c6 from "../../../../../../assets/images/Ellipse 2717.svg";
import Emoji2 from "../../../../../../assets/images/Heart.svg";
import c7 from "../../../../../../assets/images/Ellipse 2713.svg";
import Emoji3 from "../../../../../../assets/images/Page 1-1.svg";
import c8 from "../../../../../../assets/images/Ellipse 2714.svg";
import C9C10 from "../../../../../../assets/images/Ellipse 2720.svg";
import c9 from "../../../../../../assets/images/Ellipse 2721.svg";
import c10 from "../../../../../../assets/images/Ellipse 2722.svg";
import c11 from "../../../../../../assets/images/Ellipse 2719.svg";

const Globe = () => {
  return (
    <div className={styles.globe}>
      <img src={globe} alt="globe" />
      <img src={c1} alt="c1" className={styles.c1} />
      <img src={c2} alt="c2" className={styles.c2} />
      <div className={styles.c1_c2}>
        <C1C2 />
      </div>
      <div className={styles.multiConnector}>
        <MultiConnector />
      </div>
      <img src={c3} alt="c3" className={styles.c3} />
      <img src={c4} alt="c4" className={styles.c4} />
      <img src={c5} alt="c5" className={styles.c5} />
      <img src={Emoji1} alt="emoji1" className={styles.emoji1} />
      <img src={c6} alt="c6" className={styles.c6} />
      <img src={Emoji2} alt="emoji2" className={styles.emoji2} />
      <img src={c7} alt="c7" className={styles.c7} />
      <img src={Emoji3} alt="emoji3" className={styles.emoji3} />
      <img src={c8} alt="c8" className={styles.c8} />
      <img src={C9C10} alt="c9c10" className={styles.c9c10} />
      <img src={c9} alt="c9" className={styles.c9} />
      <img src={c10} alt="c10" className={styles.c10} />
      <img src={c11} alt="c11" className={styles.c11} />

      {/* <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" />
      <img src={globe} alt="globe" /> */}
    </div>
  );
};

export default Globe;
