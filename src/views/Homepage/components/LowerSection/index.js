import React from "react";
import styles from "./styles.module.css";
import Globe from "./components/Globe";
import { DETAILCARDS } from "../../../../data/Homepage";
import DetailCard from "../../../../components/common/DetailCard";

const LowerSection = () => {
  const DETAILEDCARDS = DETAILCARDS.map((elem) => {
    let theme = styles.bluetheme;
    let comingSoonContainer = styles.pinkborder;
    switch (elem.theme) {
      case "blue":
        theme = styles.bluetheme;
        comingSoonContainer = styles.pinkborder;
        break;
      case "green":
        theme = styles.greentheme;
        comingSoonContainer = styles.greenborder;
        break;
      case "pink":
        theme = styles.pinktheme;
        comingSoonContainer = styles.pinkborder;
        break;
      default:
        theme = styles.bluetheme;
        comingSoonContainer = styles.pinkborder;
        break;
    }
    return (
      <DetailCard
        className={`${theme} ${styles.detailCard}`}
        titleClass={styles.cardTitle}
        descriptionClass={styles.cardDescription}
        btnContainerClass={styles.cardBtnContainer}
        btnClass={styles.cardButton}
        key={elem.id}
        title={elem.title}
        description={elem.description}
        enabled={elem.enabled}
        comingSoonContainerClass={`${comingSoonContainer} ${styles.comingSoonContainer}`}
        arrowColor={"black"}
      />
    );
  });
  return (
    <div className={styles.lowerSection}>
      <h2 className={styles.heading}>
        FanCloud CDN network revolutionizes video infrastructure
        <br /> with community-driven Innovation
      </h2>
      <p className={styles.content}>
        FanCloud pioneers a new era of connectivity with its decentralised
        content delivery network (dCDN), leveraging a global network of
        community-powered nodes. By harnessing a decentralised architecture,
        dCDN drastically reduces data transfer and compute costs while enhancing
        load time. Join FanCloud’s dCDN network and experience the future of
        seamless, secure and community- driven consumption
      </p>
      <Globe />
      <div className={styles.detailCards}>{DETAILEDCARDS}</div>
    </div>
  );
};

export default LowerSection;
