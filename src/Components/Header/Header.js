import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <span className={styles.inlineB}>C</span>
          <span className={styles.inlineB}>
            <img
              className={styles.logo}
              width="70"
              height="67"
              src={process.env.PUBLIC_URL + "/logo-corona-small.png"}
              alt="logo"
            />
          </span>
          <span className={styles.inlineB}>VID - 19</span>
        </div>
      </div>
    </>
  );
};

export default Header;
