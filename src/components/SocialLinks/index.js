import React from "react";
import { FaMedium, FaEnvelope, FaTwitter, FaGithub, FaXing } from "react-icons/lib/fa";

import styles from "./socialLinksStyles.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li>
          <a href="mailto:s.christ@mailbox.org">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="https://github.com/codinguniverse-de">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/UniverseCoding">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@christ.soeren">
            <FaMedium />
          </a>
        </li>
        <li>
          <a href="https://www.xing.com/profile/Soeren_Christ">
            <FaXing />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
