import React from "react";
import wave1 from "../../../assets/wave1.svg";
import wave2 from "../../../assets/wave2.svg";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={wave1} alt="wave background" />
      <img src={wave2} alt="wave background" />
    </div>
  );
};

export default Footer;
