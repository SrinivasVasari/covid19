import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = ({ detailsPerPage, totalDetails, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDetails / detailsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li className={styles.paginationList} key={number}>
            <a className={styles.paginationText} onClick={(e) => paginate(e, number)} href="!#">{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
