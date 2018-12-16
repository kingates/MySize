import React from 'react';
import styles from './Footer.scss';
import facebook from "../../assets/facebook.png"
import gmail from "../../assets/gmail.png"
import insta from "../../assets/insta.png"




const Footer = () => (

  <div className={styles.footer}>
  <div className={styles.icons}>
  <img className={styles.icon} src={facebook} alt={"Facebook"} href="#"/>
  <img className={styles.icon} src={insta} alt={"Instagram"} href="#"/>
  <img className={styles.icon} src={gmail} alt={"Gmail"} href="#"/>
  </div>
  <div className={styles.copyright}>
  &copy; Project: Kinga Tes. Images: <a href="https://pexels.com/"> Pexels</a>.
  </div>

  </div>


);
export default Footer;
