import React from "react";
import styles from './Banner.scss';
import logo from "../../assets/logo.png"


const Banner = () => (
  // <div className="banner">
  <div className={styles.banner}>
    <div className={styles.bannerLogo}>
      <img src={logo} alt={"logo"}/>
      <p className={styles.subtitle}>Your daily mood tracker</p>
    </div>
  </div>
);

export default Banner;
