import React from "react";
import styles from "../styles/BandLogo.module.css";
import NavBar from "./NavBar";

const BandLogo = () => {
  return (
    <div className={styles.BandLogo}>
      <h1 className={styles.MainHeading}>Music Videos Out Now</h1>
      <NavBar />
    </div>
  );
};

export default BandLogo;