/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "../../../styles/ActivityDetails.module.scss";

import { motion } from "framer-motion";

import { addActivity } from "../../../redux/actions/activityActions";
import { useDispatch, useSelector } from "react-redux";

function NewActivity({ opened, closeNewActivity }) {
  const dispatch = useDispatch();

  const colormode = useSelector((state) => state.color.colormode);

  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const [open, setOpen] = useState(false);

  const [bgColor, setBgColor] = useState("#ffffff");
  const [mainFontColor, setMainFontColor] = useState("white");
  const [secondaryFontColor, setSecondaryFontColor] = useState("#747784");
  const [iconColor, setIconColor] = useState("#5e6170");
  const [categoryFontColor, setCategoryFontColor] = useState("#5d6170");
  const [borderColor, setBorderColor] = useState("#e3e4e6");

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("#ffffff");
      setMainFontColor("black");
      setSecondaryFontColor("#747784");
      setIconColor("#5e6170");
      setCategoryFontColor("#5d6170");
      setBorderColor("#e3e4e6");
    } else {
      setBgColor("#323339");
      setMainFontColor("white");
      setSecondaryFontColor("#adadb0");
      setIconColor("#adadb0");
      setCategoryFontColor("#adadb0");
      setBorderColor("#4b4b51");
    }
  }, [colormode]);

  const detailsVariants = {
    open: { opacity: 1, x: 0, width: "35%" },
    closed: { opacity: 0, x: "100%" },
  };

  useEffect(() => {
    setOpen(opened);
  }, [opened]);

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
    closeNewActivity(true);
    setNewTitle("");
    setNewDescription("");
  };

  const save = () => {
    dispatch(addActivity(newTitle, newDescription));
    setEditing(false);
    setOpen(false);
    closeNewActivity(true);
    setNewTitle("");
    setNewDescription("");
  };

  return (
    <motion.div
      className={styles.act_details}
      animate={open ? "open" : "closed"}
      transition={{ duration: 0.2 }}
      variants={detailsVariants}
      style={{ backgroundColor: bgColor, color: mainFontColor }}
    >
      <div className={styles.details_top}>
        <div className={styles.details_top_text}>
          <h1>Add Activity Log</h1>
        </div>
        <div className={styles.details_top_buttons}>
          <button
            style={{
              color: secondaryFontColor,
              border: `0.5px solid ${secondaryFontColor}`,
            }}
            onClick={() => {
              setEditing(false);
              setOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            style={{ backgroundColor: "#3b7af7", color: "white" }}
            onClick={save}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 0.25H1.75C1.35218 0.25 0.970644 0.408035 0.68934 0.68934C0.408035 0.970644 0.25 1.35218 0.25 1.75V12.25C0.25 12.6478 0.408035 13.0294 0.68934 13.3107C0.970644 13.592 1.35218 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V3.25L10.75 0.25ZM12.25 12.25H1.75V1.75H10.1275L12.25 3.8725V12.25ZM7 7C5.755 7 4.75 8.005 4.75 9.25C4.75 10.495 5.755 11.5 7 11.5C8.245 11.5 9.25 10.495 9.25 9.25C9.25 8.005 8.245 7 7 7ZM2.5 4C2.5 3.17157 3.17157 2.5 4 2.5H7.75C8.57843 2.5 9.25 3.17157 9.25 4C9.25 4.82843 8.57843 5.5 7.75 5.5H4C3.17157 5.5 2.5 4.82843 2.5 4Z"
                fill="white"
              />
            </svg>
            Save
          </button>
        </div>
      </div>
      <input
        style={{ color: mainFontColor }}
        className={styles.titleChange}
        type="text"
        placeholder="Enter a name..."
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <div className={styles.details_desc}>
        <h6 style={{ color: categoryFontColor }}>DESCRIPTION</h6>
        <textarea
          style={{ color: mainFontColor }}
          type="text"
          placeholder="Enter a nice description here..."
          rows="8"
          onChangeCapture={(e) => setNewDescription(e.target.value)}
        />
      </div>
      <div className={styles.details_attach}>
        <h6 style={{ color: categoryFontColor }}>ATTACHMENTS</h6>
        <div className={styles.details_imgs_and_upload}>
          <div className={styles.upload}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 8.25005C10.8358 8.25005 10.5 8.58583 10.5 9.00005V10.5H1.5V9.00005C1.5 8.58583 1.16421 8.25005 0.75 8.25005C0.335786 8.25005 0 8.58583 0 9.00005V10.5C0 11.325 0.675 12 1.5 12H10.5C11.325 12 12 11.325 12 10.5V9.00005C12 8.58583 11.6642 8.25005 11.25 8.25005ZM2.77926 3.22078C2.48696 3.51309 2.48696 3.987 2.77926 4.27931C3.07116 4.57121 3.54429 4.57167 3.83676 4.28033L5.25 2.87255V8.25005C5.25 8.66426 5.58579 9.00005 6 9.00005C6.41421 9.00005 6.75 8.66426 6.75 8.25005V2.87255L8.16324 4.28033C8.45571 4.57167 8.92883 4.57121 9.22074 4.27931C9.51304 3.987 9.51304 3.51309 9.22074 3.22079L6.35355 0.3536C6.15829 0.158338 5.84171 0.158338 5.64645 0.3536L2.77926 3.22078Z"
                fill={secondaryFontColor}
              />
            </svg>
            <p style={{ color: secondaryFontColor }}>Upload Files</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default NewActivity;
