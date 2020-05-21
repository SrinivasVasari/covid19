import React from "react";
import styles from "../CountrySelect/CountrySelect.module.css";

const StateSelect = (props) => {
  const { statesList, handleStateChange } = props;
  
  let states = !statesList
    ? "loading..."
    : statesList.length > 0 &&
      statesList.map((state, i) => {
        return (
          <option key={i} value={state}>
            {state}
          </option>
        );
      });

  return (
    <div className={styles.selectContainer}>
      <select className={styles.select} onChange={(e) => handleStateChange(e.target.value)}>
        <option value="Global">Select State...</option>
        {states}
      </select>
    </div>
  );
};

export default StateSelect;
