import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ global, date }) => {
  if (!global) {
    return <div>Loading...</div>;
  }
  const update = !date ? "" : new Date(date).toDateString();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.date}>
          <span>Last Updated By:</span> {update}
        </div>
        <div className={styles.dFlex}>
          <div className={`${styles.card} ${styles.blue}`}>
            <div className={styles.cardContent}>
              <p className={styles.cardP}>New Confirmed</p>
              <h2 className={styles.cardH}>{global.NewConfirmed}</h2>
            </div>
          </div>
          <div className={`${styles.card} ${styles.red}`}>
            <div className={styles.cardContent}>
              <p className={styles.cardP}>New Deaths</p>
              <h2 className={styles.cardH}>{global.NewDeaths}</h2>
            </div>
          </div>
          <div className={`${styles.card} ${styles.green}`}>
            <div className={styles.cardContent}>
              <p className={styles.cardP}>New Recovered</p>
              <h2 className={styles.cardH}>{global.NewRecovered}</h2>
            </div>
          </div>
        </div>
        <div className={styles.dFlex}>
          <div className={`${styles.card} ${styles.blue}`}>
            <div className={styles.cardContent}>
              <p className={styles.cardP}>Total Confirmed</p>
              <h2 className={styles.cardH}>{global.TotalConfirmed}</h2>
            </div>
          </div>
          <div className={`${styles.card} ${styles.red}`}>
            <div className={styles.cardContent}>
              <p className={styles.cardP}>Total Deaths</p>
              <h2 className={styles.cardH}>{global.TotalDeaths}</h2>
            </div>
          </div>
          <div className={`${styles.card} ${styles.green}`}>
            <div className={styles.cardContent}>
              <p className={styles.cardP}>Total Recovered</p>
              <h2 className={styles.cardH}>{global.TotalRecovered}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
