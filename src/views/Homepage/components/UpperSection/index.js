import React from "react";
import Button from "../../../../components/common/Button";
import Card from "../../../../components/common/Card";
import { CARDS } from "../../../../data/Homepage";
import Images from "./components/Images";
import styles from "./styles.module.css";

const UpperSection = () => {
  const CARDS_DATA = CARDS.map((elem) => (
    <Card
      className={styles.card}
      key={elem.id}
      title={elem.title}
      subtitle={elem.subTitle}
      value={elem.value}
      titleContainerClass={styles.titleContainer}
      titleClass={styles.title}
      valueClass={styles.value}
      subtitleClass={styles.subtitle}
      showStarIcon={true}
      starIconClass={styles.starIconClass}
    />
  ));
  return (
    <div className={styles.upperSection}>
      <h1 className={styles.heading}>
        Empowering the Digital Era:
        <br /> Decentarlizing Entertainment
      </h1>
      <h4 className={styles.subHeading}>
        Join the world’s first DePIN: Revolutionizing Content Streaming with
        faster, Safer <br /> and Cheaper Access
      </h4>

      <Button title={"Coming Soon"} className={styles.comingSoon} />
      <Images classname={styles.grouppedImages} />
      <div className={styles.cards}>{CARDS_DATA}</div>
    </div>
  );
};

export default UpperSection;
