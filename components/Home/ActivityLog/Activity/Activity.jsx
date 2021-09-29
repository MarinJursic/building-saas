import React, { useState, useEffect } from "react";
import styles from "../../../../styles/Activity.module.scss";

import { motion } from "framer-motion";

import { useDetectClickOutside } from "react-detect-click-outside";

import {
  deleteActivity,
  setActiveActivity,
} from "../../../../redux/actions/activityActions";
import { switchColormode } from "../../../../redux/actions/colormodeActions";
import { useDispatch, useSelector } from "react-redux";

function Activity({ activity }) {
  const dispatch = useDispatch();
  const activeActivity = useSelector((state) => state.activity.activeActivity);
  const colormode = useSelector((state) => state.color.colormode);

  const [isClicked, setIsClicked] = useState(false);
  const [day, setDay] = useState();
  const [time, setTime] = useState();

  const [mainFontColor, setMainFontColor] = useState("white");
  const [secondaryFontColor, setSecondaryFontColor] = useState("#747784");
  const [iconColor, setIconColor] = useState("#5e6170");
  const [clickedBgColor, setClickedBgColor] = useState("#eff4fe");
  const [borderColor, setBorderColor] = useState("#e3e4e6");

  useEffect(() => {
    if (colormode === "light") {
      setMainFontColor("black");
      setSecondaryFontColor("#747784");
      setIconColor("#5e6170");
      setClickedBgColor("#eff4fe");
      setBorderColor("#e3e4e6");
    } else {
      setMainFontColor("white");
      setSecondaryFontColor("#adadb0");
      setIconColor("#adadb0");
      setClickedBgColor("#333948");
      setBorderColor("#4b4b51");
    }
  }, [colormode]);

  useEffect(() => {
    if (!activeActivity || activity.id !== activeActivity.id)
      setIsClicked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeActivity]);

  useEffect(() => {
    const date = new Date(activity.date);
    const today = new Date();

    // Set date

    if (
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      // If today
      if (date.getDate() === today.getDate()) setDay("Today");
      // If yesterday
      else if (date.getDate() === today.getDate() - 1) setDay("Yesterday");
      // If any other day
      else {
        setDay(
          `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        );
      }
      // If any other month or year
    } else {
      setDay(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
    }

    // Set time
    let hours = date.getHours();
    let minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    hours = hours ? hours : 12; // If hours is 0 it should be 12

    minutes = minutes < 10 ? "0" + minutes : minutes;

    setTime(`${hours}:${minutes} ${ampm}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (e) => {
    e.stopPropagation();

    dispatch(deleteActivity(activity.id));

    setIsClicked(false);
  };

  const activateActivity = () => {
    setIsClicked(true);
    dispatch(setActiveActivity(activity));
  };

  return (
    <div
      className={`${styles.activity} ${
        isClicked ? styles.activity_clicked : ""
      }`}
      onClick={activateActivity}
      style={{
        borderTop: !activity.isFirst ? `1px solid ${borderColor}` : "",
        color: secondaryFontColor,
        backgroundColor: isClicked ? clickedBgColor : "transparent",
      }}
    >
      <div className={styles.top}>
        <div className={styles.top_details}>
          <h5 style={{ color: mainFontColor }}>{activity.title}</h5>
          <p>
            {activity.author} • {day} • {time}
          </p>
        </div>
        <div className={styles.top_icons}>
          <motion.svg
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}
            onClick={handleDelete}
            className={styles.delete}
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.65015 2L5.35015 2.00001C5.19102 2.00001 5.0384 2.06322 4.92588 2.17575C4.81336 2.28827 4.75015 2.44088 4.75015 2.60001V3.50001H9.25015V2.6C9.25015 2.44087 9.18693 2.28826 9.07441 2.17574C8.96189 2.06321 8.80928 2 8.65015 2ZM10.7501 3.50001V2.6C10.7501 2.04305 10.5289 1.5089 10.1351 1.11508C9.74124 0.721249 9.2071 0.5 8.65014 0.5L5.35014 0.500009C4.79319 0.500009 4.25905 0.721258 3.86522 1.11508C3.4714 1.50891 3.25015 2.04305 3.25015 2.60001V3.50001H1C0.585786 3.50001 0.25 3.8358 0.25 4.25001C0.25 4.66422 0.585786 5.00001 1 5.00001H1.75015V13.4C1.75015 13.957 1.9714 14.4911 2.36522 14.8849C2.75905 15.2788 3.29319 15.5 3.85015 15.5H10.1501C10.7071 15.5 11.2412 15.2788 11.6351 14.8849C12.0289 14.4911 12.2501 13.957 12.2501 13.4V5.00001H13C13.4142 5.00001 13.75 4.66422 13.75 4.25001C13.75 3.8358 13.4142 3.50001 13 3.50001H10.7501ZM10.7501 5.00001H3.25015V13.4C3.25015 13.5591 3.31336 13.7118 3.42588 13.8243C3.5384 13.9368 3.69102 14 3.85015 14H10.1501C10.3093 14 10.4619 13.9368 10.5744 13.8243C10.6869 13.7118 10.7501 13.5591 10.7501 13.4V5.00001ZM5.5 6.5C5.91421 6.5 6.25 6.83579 6.25 7.25V11.75C6.25 12.1642 5.91421 12.5 5.5 12.5C5.08579 12.5 4.75 12.1642 4.75 11.75V7.25C4.75 6.83579 5.08579 6.5 5.5 6.5ZM8.5 6.5C8.91421 6.5 9.25 6.83579 9.25 7.25V11.75C9.25 12.1642 8.91421 12.5 8.5 12.5C8.08579 12.5 7.75 12.1642 7.75 11.75V7.25C7.75 6.83579 8.08579 6.5 8.5 6.5Z"
              fill={iconColor}
            />
          </motion.svg>

          <motion.svg
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}
            onClick={(e) => {
              e.stopPropagation();
              console.log("share");
            }}
            className={styles.share}
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06ZM11.5 2C11.9125 2 12.25 2.3375 12.25 2.75C12.25 3.1625 11.9125 3.5 11.5 3.5C11.0875 3.5 10.75 3.1625 10.75 2.75C10.75 2.3375 11.0875 2 11.5 2ZM2.5 8.75C2.0875 8.75 1.75 8.4125 1.75 8C1.75 7.5875 2.0875 7.25 2.5 7.25C2.9125 7.25 3.25 7.5875 3.25 8C3.25 8.4125 2.9125 8.75 2.5 8.75ZM11.5 14.015C11.0875 14.015 10.75 13.6775 10.75 13.265C10.75 12.8525 11.0875 12.515 11.5 12.515C11.9125 12.515 12.25 12.8525 12.25 13.265C12.25 13.6775 11.9125 14.015 11.5 14.015Z"
              fill={iconColor}
            />
          </motion.svg>
        </div>
      </div>
      <p>{activity.shortDescription}</p>
      <div className={styles.attachments}>
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2753 1.93652C9.7757 1.93652 9.29655 2.13499 8.94326 2.48828L2.89547 8.53607C2.29522 9.13632 1.95801 9.95043 1.95801 10.7993C1.95801 11.6482 2.29522 12.4623 2.89547 13.0625C3.49572 13.6628 4.30983 14 5.15871 14C6.00759 14 6.8217 13.6628 7.42195 13.0625L13.4697 7.01475C13.7626 6.72186 14.2375 6.72186 14.5304 7.01475C14.8233 7.30764 14.8233 7.78252 14.5304 8.07541L8.4826 14.1232C7.60105 15.0048 6.40541 15.5 5.15871 15.5C3.912 15.5 2.71636 15.0048 1.83481 14.1232C0.953259 13.2416 0.458008 12.046 0.458008 10.7993C0.458008 9.5526 0.953259 8.35696 1.83481 7.47541L7.8826 1.42762C8.51719 0.79303 9.37787 0.436523 10.2753 0.436523C11.1728 0.436523 12.0334 0.79303 12.668 1.42762C13.3026 2.0622 13.6591 2.92288 13.6591 3.82032C13.6591 4.71776 13.3026 5.57845 12.668 6.21303L6.61365 12.2608C6.22603 12.6484 5.7003 12.8662 5.15213 12.8662C4.60395 12.8662 4.07823 12.6484 3.69061 12.2608C3.30299 11.8732 3.08523 11.3475 3.08523 10.7993C3.08523 10.2511 3.30299 9.7254 3.69061 9.33779L9.27805 3.75692C9.57112 3.4642 10.046 3.46448 10.3387 3.75755C10.6314 4.05061 10.6312 4.52548 10.3381 4.8182L4.75127 10.3984C4.64515 10.5047 4.58523 10.6491 4.58523 10.7993C4.58523 10.9497 4.64495 11.0938 4.75127 11.2002C4.85758 11.3065 5.00178 11.3662 5.15213 11.3662C5.30248 11.3662 5.44667 11.3065 5.55299 11.2002L11.6074 5.15237C11.6075 5.15228 11.6073 5.15247 11.6074 5.15237C11.9605 4.79912 12.1591 4.3198 12.1591 3.82032C12.1591 3.32071 11.9606 2.84156 11.6074 2.48828C11.2541 2.13499 10.7749 1.93652 10.2753 1.93652Z"
            fill={iconColor}
          />
        </svg>

        <p>3 Attachments</p>
      </div>
    </div>
  );
}

export default Activity;
