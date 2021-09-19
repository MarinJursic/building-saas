import React, { useState, useEffect } from "react";
import styles from "../../../styles/AddGanttTask.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { switchColormode } from "../../../redux/actions/colormodeActions";

function AddGanttTask() {
  const dispatch = useDispatch();
  const colormode = useSelector((state) => state.color.colormode);

  const [bgColor, setBgColor] = useState("#f5f6fa");
  const [fontColor, setFontColor] = useState("#5a5e6e");
  const [addColor, setAddColor] = useState("black");
  const [borderColor, setBorderColor] = useState("#e0e0e0");

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("#f5f6fa");
      setFontColor("#5a5e6e");
      setAddColor("black");
      setBorderColor("#e0e0e0");
    } else {
      setBgColor("#222328");
      setFontColor("#a7a7a9");
      setAddColor("white");
      setBorderColor("#4b4b51");
    }
  }, [colormode]);

  const dropdownIcon = () => (
    <svg
      width="12"
      height="8"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.09 5.03257L5 2.12257L7.91 5.03257C7.97943 5.102 8.06187 5.15708 8.15259 5.19466C8.24331 5.23224 8.34055 5.25158 8.43875 5.25158C8.53694 5.25158 8.63418 5.23224 8.7249 5.19466C8.81563 5.15708 8.89806 5.102 8.9675 5.03257C9.03693 4.96313 9.09201 4.8807 9.12959 4.78997C9.16717 4.69925 9.18651 4.60201 9.18651 4.50382C9.18651 4.40562 9.16717 4.30838 9.12959 4.21766C9.09201 4.12694 9.03693 4.0445 8.9675 3.97507L5.525 0.532566C5.45561 0.463038 5.3732 0.407877 5.28247 0.370241C5.19174 0.332605 5.09447 0.313232 4.99625 0.313232C4.89802 0.313232 4.80076 0.332605 4.71003 0.370241C4.6193 0.407877 4.53688 0.463038 4.4675 0.532566L1.025 3.97507C0.955469 4.04445 0.900309 4.12687 0.862672 4.2176C0.825036 4.30833 0.805664 4.40559 0.805664 4.50382C0.805664 4.60204 0.825036 4.6993 0.862672 4.79003C0.900309 4.88076 0.955469 4.96318 1.025 5.03257C1.3175 5.31757 1.7975 5.32507 2.09 5.03257Z"
        fill={fontColor}
        fillOpacity="0.7"
      />
    </svg>
  );

  const plusIcon = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 6.75H6.75V10.5C6.75 10.9125 6.4125 11.25 6 11.25C5.5875 11.25 5.25 10.9125 5.25 10.5V6.75H1.5C1.0875 6.75 0.75 6.4125 0.75 6C0.75 5.5875 1.0875 5.25 1.5 5.25H5.25V1.5C5.25 1.0875 5.5875 0.75 6 0.75C6.4125 0.75 6.75 1.0875 6.75 1.5V5.25H10.5C10.9125 5.25 11.25 5.5875 11.25 6C11.25 6.4125 10.9125 6.75 10.5 6.75Z"
        fill={addColor}
      />
    </svg>
  );

  return (
    <div
      className={styles.addGanttTask}
      style={{ color: fontColor, backgroundColor: bgColor }}
    >
      <div
        className={styles.header}
        style={{
          borderBottom: `1.5px solid ${borderColor}`,
          borderTop: `1.5px solid ${borderColor}`,
        }}
      >
        <p>Name</p>
        <div className={styles.time}>
          <p>Start Date</p>
          <p>End Date</p>
          <p>Duration</p>
        </div>
      </div>
      <div className={styles.body}>
        <div
          className={styles.phase}
          style={{
            borderBottom: `1.5px solid ${borderColor}`,
          }}
        >
          {dropdownIcon()}
          <h5>Excavation</h5>
        </div>
        <div
          className={styles.task}
          style={{
            borderBottom: `1.5px solid ${borderColor}`,
          }}
        >
          <h5>Task 1</h5>
          <div className={styles.info}>
            <p>09/10/2021</p>
            <p>09/10/2021</p>
            <p>4 days</p>
            <svg
              width="10"
              height="10"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#FDA076" />
            </svg>
          </div>
        </div>
        <div
          className={styles.add}
          style={{
            color: addColor,
            borderBottom: `1.5px solid ${borderColor}`,
          }}
        >
          <div>
            {plusIcon()}
            <h4>New Task</h4>
          </div>
          <div>
            {plusIcon()}
            <h4>New Subphase</h4>
          </div>
        </div>
      </div>
      <div
        className={styles.newPhase}
        style={{
          color: addColor,
          border: `1.5px solid ${borderColor}`,
        }}
      >
        {plusIcon()}
        <h4>New Phase</h4>
      </div>
    </div>
  );
}

export default AddGanttTask;
