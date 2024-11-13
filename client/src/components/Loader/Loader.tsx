import React from "react";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.message}>Loading...</div>
    </div>
  );
};

export default Loader;
