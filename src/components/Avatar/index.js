import React from "react";

import avatarImage from "../../../static/assets/avatar.jpg";
import styles from "./avatarStyles.module.css";

const Avatar = () => {
  return (
    <div>
      <img src={avatarImage} className={styles.avatarImg} alt="user-avatar" />
    </div>
  );
};

export default Avatar;
