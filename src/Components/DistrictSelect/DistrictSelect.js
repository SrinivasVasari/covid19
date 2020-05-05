import React, { useState, Fragment } from "react";
import DistrictCard from "../Cards/DistrictCard";
import styles from "../CountrySelect/CountrySelect.module.css";

const DistrictSelect = (props) => {
  const { data, loading } = props;
  const [info, setInfo] = useState();
  const [load, setLoad] = useState(false);
  const distrctsList =
    loading && Object.keys(data).length > 0
      ? Object.keys(Object.values(data)[0].districtData)
      : [];
  let distrcts = !loading
    ? "loading..."
    : distrctsList.length > 0 &&
      distrctsList.map((distrct, i) => {
        return (
          <option key={i} value={distrct}>
            {distrct}
          </option>
        );
      });
  const handleStateChange = (district) => {
    const stateData = Object.values(data)[0].districtData;
    const filteredState = distrctsList
      .filter((key) => district.includes(key))
      .reduce((stateObj, key) => {
        stateObj[key] = stateData[key];
        return stateObj;
      }, {});
    setInfo(Object.values(filteredState)[0]);
    setLoad(true);
  };
  return (
    <div className={styles.selectContainer}>
      {loading && distrctsList !== 0 ? (
        <Fragment>
          <select
            className={styles.select}
            onChange={(e) => handleStateChange(e.target.value)}
          >
            <option value="Global">Select District...</option>
            {distrcts}
          </select>
          <DistrictCard info={info} loading={load} />
        </Fragment>
      ) : (
        <p>Please select State...</p>
      )}
    </div>
  );
};

export default DistrictSelect;
