import React from "react";
import styles from "../../../styles/GanttPlaceholder.module.scss";
import { useSelector } from "react-redux";

function GanttPlaceholder() {
  const colormode = useSelector((state) => state.color.colormode);
  return (
    <div
      className={
        colormode === "light" ? styles.placeholder : styles.placeholderDark
      }
    >
      <div className={styles.box}>
        <h1>No Tasks To Show</h1>
      </div>
    </div>
  );
}

export default GanttPlaceholder;
