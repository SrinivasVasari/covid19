import React from "react";
import "./DetailsTable.css";

const DetailsTable = ({ countries, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const rowData = countries.map((country) => {
    const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } = country;
    return (
      <div className="tableContent">
        <span>{Country}</span>
        <span>{TotalConfirmed}</span>
        <span>{TotalDeaths}</span>
        <span>{TotalRecovered}</span>
      </div>
    );
  });
  return (
    <div className="dataTable">
      <div className="table">
        <div className="tableHeader">
          <span>Country</span>
          <span>Total Confirmed</span>
          <span>Total Deaths</span>
          <span>Total Recovered</span>
        </div>
        {rowData}
      </div>
    </div>
  );
};

export default DetailsTable;
