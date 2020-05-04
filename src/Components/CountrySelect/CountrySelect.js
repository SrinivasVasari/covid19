import React from "react";
import styles from "./CountrySelect.module.css";

const CountrySelect = ({ handleCountryChange, handleClick, countries }) => {
  let countriesList = !countries
    ? "loading..."
    : countries.length > 0 &&
      countries.map((country, i) => {
        return (
          <option key={i} value={country.Country}>
            {country.Country}
          </option>
        );
      });
  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="Global">Global</option>
        {countriesList}
      </select>
    </div>
  );
};

export default CountrySelect;
