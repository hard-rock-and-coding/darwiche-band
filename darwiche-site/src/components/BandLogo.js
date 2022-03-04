import React from "react";
import styles from "../styles/BandLogo.module.css";
import NavBar from "./NavBar";

const BandLogo = () => {
  return (
    <div className={styles.BandLogo}>
      <div>
      <h1 className={styles.MainHeading}>FOLLOW THE HERD</h1>
      <p>Music Video Out now</p>
      </div>
      <NavBar />
    </div>
  );
};

export default BandLogo;