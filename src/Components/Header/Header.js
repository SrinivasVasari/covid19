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

      {/* <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">
            Logo
          </a>
          <a href="#!" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">Javascript</a>
            </li>
            <li>
              <a href="mobile.html">Mobile</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul> */}
    </Fragment>
  );
};

export default Header;
