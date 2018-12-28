import React from "react";

import styles from "./footerStyles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>
          Copyright © 2018 Sören Christ | Site Developed & Designed using React & Gatsbyjs.
        </p>
      </div>
    </div>
  );
};

export default Footer;
