import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";

import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAddress } from "../../redux/actions/infoActions";
import { switchColormode } from "../../redux/actions/colormodeActions";

import Progress from "./Progress/Progress";
import ActivityLog from "./ActivityLog/ActivityLog";

function Home() {
  const name = useSelector((state) => state.info.name);
  const address = useSelector((state) => state.info.address);
  const colormode = useSelector((state) => state.color.colormode);

  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newAddress, setNewAddress] = useState(address);

  const [image, setImage] = useState(null);

  const contentVariants = {
    editing: { opacity: 0.5 },
    notEditing: { opacity: 1 },
  };

  const save = () => {
    dispatch(changeName(newName));
    dispatch(changeAddress(newAddress));
    setEditing(false);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") save();
    else if (e.keyCode === 27) cancel(); // Esc key
  };

  return (
    <div
      className={`${styles.home} ${editing ? styles.home_editing : ""} ${
        colormode === "dark"
          ? editing
            ? styles.home_editing_dark
            : styles.home_dark
          : ""
      }`}
    >
      <div className={styles.top}>
        {editing ? (
          <div className={styles.name_address}>
            <div className={styles.name}>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                defaultValue={name}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={handleKeyPress}
              />
            </div>
            <div className={styles.address}>
              <label htmlFor="address">ADDRESS</label>
              <input
                type="address"
                id="address"
                defaultValue={address}
                onChange={(e) => setNewAddress(e.target.value)}
                onKeyDown={handleKeyPress}
              />
            </div>
          </div>
        ) : (
          <div className={styles.name_address}>
            <h4>{name}</h4>
            <h6>{address}</h6>
          </div>
        )}
        {editing && (
          <div className={styles.fileContainer}>
            <label className={styles.fileLabel} htmlFor="upload">
              <svg
                width="18"
                height="16"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6225 2H14C14.825 2 15.5 2.675 15.5 3.5V12.5C15.5 13.325 14.825 14 14 14H2C1.175 14 0.5 13.325 0.5 12.5V3.5C0.5 2.675 1.175 2 2 2H5.3775L5.56152 1.25899C5.67225 0.813078 6.07259 0.5 6.53204 0.5H9.46796C9.92741 0.5 10.3277 0.813078 10.4385 1.25899L10.6225 2ZM2 12.5H14V3.5H2V12.5Z"
                  fill="white"
                />
                <path
                  d="M8 10.25C6.7625 10.25 5.75 9.2375 5.75 8C5.75 6.7625 6.7625 5.75 8 5.75C9.2375 5.75 10.25 6.7625 10.25 8C10.25 9.2375 9.2375 10.25 8 10.25Z"
                  fill="white"
                />
              </svg>
            </label>
            {image && <h3>{image.name}</h3>}
            <input
              id="upload"
              type="file"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
          </div>
        )}
        {editing ? (
          <div className={styles.editing_buttons}>
            <button className={styles.cancel} onClick={() => setEditing(false)}>
              <p>Cancel</p>
            </button>
            <button className={styles.save} onClick={save}>
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
              <p>Save</p>
            </button>
          </div>
        ) : (
          <button onClick={() => setEditing(true)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.545 4.765L9.235 5.455L2.44 12.25H1.75V11.56L8.545 4.765ZM11.245 0.25C11.0575 0.25 10.8625 0.325 10.72 0.4675L9.3475 1.84L12.16 4.6525L13.5325 3.28C13.602 3.21061 13.6572 3.1282 13.6948 3.03747C13.7325 2.94674 13.7518 2.84948 13.7518 2.75125C13.7518 2.65302 13.7325 2.55576 13.6948 2.46503C13.6572 2.3743 13.602 2.29189 13.5325 2.2225L11.7775 0.4675C11.6275 0.3175 11.44 0.25 11.245 0.25ZM8.545 2.6425L0.25 10.9375V13.75H3.0625L11.3575 5.455L8.545 2.6425Z"
                fill="white"
              />
            </svg>

            <p>Edit Details</p>
          </button>
        )}
      </div>
      <motion.div
        className={styles.content}
        animate={editing ? "editing" : "notEditing"}
        transition={{ duration: 0.3 }}
        variants={contentVariants}
      >
        <Progress />
        <ActivityLog />
      </motion.div>
    </div>
  );
}

export default Home;
