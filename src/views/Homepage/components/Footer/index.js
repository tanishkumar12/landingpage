import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2 className={styles.heading}>The transition CDN-dCDN</h2>
      <p className={styles.content}>
        FanCloud pioneers a new era of connectivity with its decentralised
        content delivery network (dCDN), leveraging a global network of
        community-powered nodes. By harnessing a decentralised architecture,
        dCDN drastically reduces data transfer and compute costs while enhancing
        load time. Join FanCloud’s dCDN network and experience the future of
        seamless, secure and community- driven consumption
      </p>
    </div>
  );
};

export default Footer;
