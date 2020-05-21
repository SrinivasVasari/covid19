import React from "react";
import styles from "./DistrictCard.module.css";

const DistrictCard = ({ info, loading }) => {
  if (info === undefined) {
    return <div>Please Select District...</div>;
  }
  return (
    <div className={`${styles.dFlex} flex-container`}>
      <div className={`${styles.card} ${styles.yellow}`}>
        <div className={styles.cardContent}>
          <p className={styles.cardP}>Active Cases</p>
          <h2 className={styles.cardH}>{info.active}</h2>
        </div>
      </div>
      <div className={`${styles.card} ${styles.blue}`}>
        <div className={styles.cardContent}>
          <p className={styles.cardP}>Confirmed Cases</p>
          <h2 className={styles.cardH}>{info.confirmed}</h2>
        </div>
      </div>
      <div className={`${styles.card} ${styles.green}`}>
        <div className={styles.cardContent}>
          <p className={styles.cardP}>Recovered Cases</p>
          <h2 className={styles.cardH}>{info.recovered}</h2>
        </div>
      </div>
      <div className={`${styles.card} ${styles.red}`}>
        <div className={styles.cardContent}>
          <p className={styles.cardP}>Deceased Cases</p>
          <h2 className={styles.cardH}>{info.deceased}</h2>
        </div>
      </div>
    </div>
  );
};

export default DistrictCard;