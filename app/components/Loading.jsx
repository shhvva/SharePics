import React from "react";
import styles from "./Loading.module.css";

const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.spinner}></div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default LoadingScreen;
