import React, { useState, useEffect } from "react";
import styles from "../../../styles/ActivityLog.module.scss";
import "simplebar/src/simplebar.css";

import { useDetectClickOutside } from "react-detect-click-outside";

import SimpleBar from "simplebar-react";

import Activity from "./Activity/Activity";
import ActivityDetails from "./ActivityDetails/ActivityDetails";
import NewActivity from "./NewActivity";

import { useSelector, useDispatch } from "react-redux";
import { setActiveActivity } from "../../../redux/actions/activityActions";
import { switchColormode } from "../../../redux/actions/colormodeActions";

function ActivityLog() {
  const activities = useSelector((state) => state.activity.activities);
  const activeActivity = useSelector((state) => state.activity.activeActivity);
  const colormode = useSelector((state) => state.color.colormode);
  const dispatch = useDispatch();

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [newActivityOpen, setNewActivityOpen] = useState(false);

  const [bgColor, setBgColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  const [borderColor, setBorderColor] = useState("#e0e0e0");

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("white");
      setFontColor("black");
      setBorderColor("#e0e0e0");
    } else {
      setBgColor("#323339");
      setFontColor("white");
      setBorderColor("#4b4b51");
    }
  }, [colormode]);

  useEffect(() => {
    if (!detailsOpen) {
      dispatch(setActiveActivity(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailsOpen]);

  useEffect(() => {
    if (activeActivity) {
      setDetailsOpen(true);
    } else {
      setDetailsOpen(false);
    }
  }, [activeActivity]);

  return (
    <div
      className={styles.activities}
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      <div
        className={styles.title_top}
        style={{ borderBottom: `1px solid ${borderColor}` }}
      >
        <h5 onClick={() => setDetailsOpen(true)}>Activity Log</h5>
        <svg
          onClick={() => setNewActivityOpen(true)}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 6.75H6.75V10.5C6.75 10.9125 6.4125 11.25 6 11.25C5.5875 11.25 5.25 10.9125 5.25 10.5V6.75H1.5C1.0875 6.75 0.75 6.4125 0.75 6C0.75 5.5875 1.0875 5.25 1.5 5.25H5.25V1.5C5.25 1.0875 5.5875 0.75 6 0.75C6.4125 0.75 6.75 1.0875 6.75 1.5V5.25H10.5C10.9125 5.25 11.25 5.5875 11.25 6C11.25 6.4125 10.9125 6.75 10.5 6.75Z"
            fill={colormode === "light" ? "#181D32" : "#adadb0"}
            fillOpacity="0.7"
          />
        </svg>
      </div>
      <div className={styles.activities_holder}>
        <ActivityDetails opened={detailsOpen} />
        <NewActivity
          opened={newActivityOpen}
          closeNewActivity={(close) => close && setNewActivityOpen(false)}
        />
        <SimpleBar
          style={{ maxHeight: activities.length <= 3 ? "40rem" : "36rem" }}
        >
          {activities.map((activity, i) => (
            <Activity
              key={activity.id}
              activity={{ ...activity, ...{ isFirst: i === 0 } }}
              openedDetails={(activity) => {
                setDetailsOpen(true);
                setActiveActivity(activity);
              }}
            />
          ))}
        </SimpleBar>
      </div>
    </div>
  );
}

export default ActivityLog;
