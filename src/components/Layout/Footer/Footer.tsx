import React from "react";
import wave1 from "../../../assets/wave1.svg";
import wave2 from "../../../assets/wave2.svg";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <img src={wave1} alt="wave background" />
      <img src={wave2} alt="wave background" />
    </div>
  );
};

export default Footer;
