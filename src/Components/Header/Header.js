import React, { Fragment } from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <span className={styles.inlineB}>C</span>
          <span className={styles.inlineB}>
            <img
              className={styles.logo}
              width="60"
              height="60"
              src={process.env.PUBLIC_URL + "/logo-corona-small.png"}
              alt="logo"
            />
          </span>
          <span className={styles.inlineB}>VID - 19</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
