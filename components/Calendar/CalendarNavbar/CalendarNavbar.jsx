import React, { useState, useEffect } from "react";
import styles from "../../../styles/CalendarNavbar.module.scss";

import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { switchColormode } from "../../../redux/actions/colormodeActions";
import { changeName } from "../../../redux/actions/infoActions";

function CalendarNavbar({ update, direction, dateCallback, switchCallback }) {
  const today = new Date();

  const calculateWeek = (day) => {
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const offsetDate = day + firstDay - 1;
    return Math.floor(offsetDate / 7);
  };

  const getDaysInMonth = () => {
    return new Date(year, monthIndex, 0).getDate();
  };

  const dispatch = useDispatch();
  const colormode = useSelector((state) => state.color.colormode);
  const name = useSelector((state) => state.info.name);

  const [activeSwitch, setActiveSwitch] = useState("left");
  const [allMonths] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const [monthIndex, setMonthIndex] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [week, setWeek] = useState(calculateWeek(today.getDate()));
  const [day, setDay] = useState(today.getDate());

  const [searchOpen, setSearchOpen] = useState(false);
  const [input, setInput] = useState();

  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const [bgColor, setBgColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  const [borderColor, setBorderColor] = useState("0, 0, 0,");

  const [weekMode, setWeekMode] = useState(false);

  const search = () => {
    console.log(input);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") search();
  };

  const save = () => {
    dispatch(changeName(newName));
    setEditing(false);
  };

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("white");
      setFontColor("black");
      setBorderColor("0, 0, 0,");
    } else {
      setBgColor("#323339");
      setFontColor("white");
      setBorderColor("255, 255, 255,");
    }
  }, [colormode]);

  useEffect(() => {
    direction === -1 && decreaseMonth();
    direction === 1 && increaseMonth();
  }, [update]);

  useEffect(() => {
    setWeekMode(activeSwitch === "right");
    if (activeSwitch === "left") {
      switchCallback("month");
    } else {
      setDay(1);
      switchCallback("week");
    }
  }, [activeSwitch]);

  const switchVariants = {
    left: { x: 0 },
    right: { x: "100%" },
  };

  const inputVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "100%" },
  };

  useEffect(() => {
    dateCallback({ year, monthIndex, week, day });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, monthIndex, week, day]);

  const increaseMonth = async () => {
    if (monthIndex === 11) {
      setYear(year + 1);
      setMonthIndex(0);
    } else {
      setMonthIndex(monthIndex + 1);
    }

    return new Promise((res, rej) => res("done"));
  };

  const decreaseMonth = async () => {
    if (monthIndex === 0) {
      setYear(year - 1);
      setMonthIndex(11);
    } else {
      setMonthIndex(monthIndex - 1);
    }

    return new Promise((res, rej) => res("done"));
  };

  useEffect(() => {
    setWeek(calculateWeek(day));
  }, [day]);

  const increaseWeek = () => {
    const daysInMonth = getDaysInMonth();

    if (day + 7 > daysInMonth) {
      if (week != calculateWeek(daysInMonth)) {
        setDay(daysInMonth);
      } else {
        increaseMonth().then(() => setDay(1));
      }
    } else {
      setDay(day + 7);
    }
  };

  const decreaseWeek = () => {
    if (day - 7 <= 0) {
      if (week != 0) {
        setDay(0);
      } else {
        decreaseMonth().then(() => setDay(getDaysInMonth()));
      }
    } else {
      setDay(day - 7);
    }
  };

  const returnToToday = () => {
    setMonthIndex(today.getMonth());
    setYear(today.getFullYear());
    setDay(today.getDate());
  };

  return (
    <div
      className={`${styles.calnav} ${
        colormode === "dark" && styles.calnav_dark
      }`}
      style={{ color: fontColor }}
    >
      <div className={styles.address}>
        {editing ? (
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
        ) : (
          <h1>{name}</h1>
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
          <svg
            onClick={() => setEditing(true)}
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
        )}
      </div>
      <div className={styles.date}>
        <p
          onClick={returnToToday}
          style={{ border: `1px solid rgba(${borderColor} 0.2)` }}
        >
          Today
        </p>
        <svg
          onClick={weekMode ? decreaseWeek : decreaseMonth}
          alt="left arrow"
          style={{ transform: "rotate(90deg)" }}
          width="12"
          height="8"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.09 0.967551L5 3.87755L7.91 0.967551C7.97943 0.898114 8.06187 0.843035 8.15259 0.805456C8.24331 0.767877 8.34055 0.748535 8.43875 0.748535C8.53694 0.748535 8.63418 0.767877 8.7249 0.805456C8.81563 0.843035 8.89806 0.898114 8.9675 0.967551C9.03693 1.03699 9.09201 1.11942 9.12959 1.21014C9.16717 1.30087 9.18651 1.3981 9.18651 1.4963C9.18651 1.5945 9.16717 1.69173 9.12959 1.78246C9.09201 1.87318 9.03693 1.95561 8.9675 2.02505L5.525 5.46755C5.45561 5.53708 5.3732 5.59224 5.28247 5.62988C5.19174 5.66751 5.09447 5.68688 4.99625 5.68688C4.89802 5.68688 4.80076 5.66751 4.71003 5.62988C4.6193 5.59224 4.53688 5.53708 4.4675 5.46755L1.025 2.02505C0.955469 1.95567 0.900309 1.87325 0.862672 1.78252C0.825036 1.69179 0.805664 1.59453 0.805664 1.4963C0.805664 1.39807 0.825036 1.30081 0.862672 1.21008C0.900309 1.11935 0.955469 1.03694 1.025 0.967551C1.3175 0.682551 1.7975 0.675051 2.09 0.967551Z"
            fill={fontColor}
            fillOpacity="0.7"
          />
        </svg>
        <svg
          onClick={weekMode ? increaseWeek : increaseMonth}
          alt="right arrow"
          style={{ transform: "rotate(-90deg)" }}
          width="12"
          height="8"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.09 0.967551L5 3.87755L7.91 0.967551C7.97943 0.898114 8.06187 0.843035 8.15259 0.805456C8.24331 0.767877 8.34055 0.748535 8.43875 0.748535C8.53694 0.748535 8.63418 0.767877 8.7249 0.805456C8.81563 0.843035 8.89806 0.898114 8.9675 0.967551C9.03693 1.03699 9.09201 1.11942 9.12959 1.21014C9.16717 1.30087 9.18651 1.3981 9.18651 1.4963C9.18651 1.5945 9.16717 1.69173 9.12959 1.78246C9.09201 1.87318 9.03693 1.95561 8.9675 2.02505L5.525 5.46755C5.45561 5.53708 5.3732 5.59224 5.28247 5.62988C5.19174 5.66751 5.09447 5.68688 4.99625 5.68688C4.89802 5.68688 4.80076 5.66751 4.71003 5.62988C4.6193 5.59224 4.53688 5.53708 4.4675 5.46755L1.025 2.02505C0.955469 1.95567 0.900309 1.87325 0.862672 1.78252C0.825036 1.69179 0.805664 1.59453 0.805664 1.4963C0.805664 1.39807 0.825036 1.30081 0.862672 1.21008C0.900309 1.11935 0.955469 1.03694 1.025 0.967551C1.3175 0.682551 1.7975 0.675051 2.09 0.967551Z"
            fill={fontColor}
            fillOpacity="0.7"
          />
        </svg>

        <h4>
          {allMonths[monthIndex]} {year}
        </h4>
      </div>
      <div className={styles.search_sw}>
        <motion.div
          className={styles.search_input}
          animate={searchOpen ? "open" : "closed"}
          variants={inputVariants}
          transition={{ duration: 0.2 }}
          style={{ borderBottom: `1px solid rgba(${borderColor} 0.2)` }}
        >
          <motion.svg
            onClick={search}
            className={styles.search_icon}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.625 8.5001H9.0325L8.8225 8.2976C9.29121 7.75308 9.63377 7.11168 9.82566 6.41931C10.0176 5.72694 10.054 5.00072 9.9325 4.2926C9.58 2.2076 7.84 0.542603 5.74 0.287603C5.00171 0.194202 4.25184 0.270932 3.54777 0.51192C2.84369 0.752908 2.20408 1.15177 1.67787 1.67798C1.15166 2.20419 0.752801 2.8438 0.511813 3.54787C0.270825 4.25194 0.194096 5.00181 0.287496 5.7401C0.542496 7.8401 2.2075 9.5801 4.2925 9.9326C5.00061 10.0541 5.72684 10.0177 6.41921 9.82577C7.11158 9.63387 7.75297 9.29132 8.2975 8.8226L8.5 9.0326V9.6251L11.6875 12.8126C11.995 13.1201 12.4975 13.1201 12.805 12.8126C13.1125 12.5051 13.1125 12.0026 12.805 11.6951L9.625 8.5001ZM5.125 8.5001C3.2575 8.5001 1.75 6.9926 1.75 5.1251C1.75 3.2576 3.2575 1.7501 5.125 1.7501C6.9925 1.7501 8.5 3.2576 8.5 5.1251C8.5 6.9926 6.9925 8.5001 5.125 8.5001Z"
              fill={fontColor}
              fillOpacity="0.7"
            />
          </motion.svg>
          <input
            type="text"
            placeholder="Search for tasks..."
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            style={colormode === "dark" ? { color: "white" } : null}
          />
          <motion.svg
            className={styles.cancel_icon}
            onClick={() => setSearchOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.72517 0.282546C9.65578 0.213018 9.57336 0.157857 9.48263 0.120221C9.3919 0.0825852 9.29464 0.0632125 9.19642 0.0632125C9.09819 0.0632125 9.00093 0.0825852 8.9102 0.120221C8.81947 0.157857 8.73705 0.213018 8.66767 0.282546L5.00017 3.94255L1.33267 0.275045C1.26323 0.205609 1.1808 0.150529 1.09008 0.11295C0.999352 0.0753716 0.902116 0.0560303 0.803918 0.0560303C0.70572 0.0560303 0.608483 0.0753716 0.51776 0.11295C0.427037 0.150529 0.344604 0.205609 0.275168 0.275045C0.205731 0.344482 0.150651 0.426915 0.113072 0.517638C0.0754937 0.608361 0.0561523 0.705598 0.0561523 0.803796C0.0561523 0.901994 0.0754937 0.99923 0.113072 1.08995C0.150651 1.18068 0.205731 1.26311 0.275168 1.33255L3.94267 5.00005L0.275168 8.66754C0.205731 8.73698 0.150651 8.81941 0.113072 8.91014C0.0754937 9.00086 0.0561523 9.0981 0.0561523 9.19629C0.0561523 9.29449 0.0754937 9.39173 0.113072 9.48245C0.150651 9.57318 0.205731 9.65561 0.275168 9.72504C0.344604 9.79448 0.427037 9.84956 0.51776 9.88714C0.608483 9.92472 0.70572 9.94406 0.803918 9.94406C0.902116 9.94406 0.999352 9.92472 1.09008 9.88714C1.1808 9.84956 1.26323 9.79448 1.33267 9.72504L5.00017 6.05754L8.66767 9.72504C8.7371 9.79448 8.81954 9.84956 8.91026 9.88714C9.00098 9.92472 9.09822 9.94406 9.19642 9.94406C9.29461 9.94406 9.39185 9.92472 9.48257 9.88714C9.5733 9.84956 9.65573 9.79448 9.72517 9.72504C9.7946 9.65561 9.84968 9.57318 9.88726 9.48245C9.92484 9.39173 9.94418 9.29449 9.94418 9.19629C9.94418 9.0981 9.92484 9.00086 9.88726 8.91014C9.84968 8.81941 9.7946 8.73698 9.72517 8.66754L6.05767 5.00005L9.72517 1.33255C10.0102 1.04755 10.0102 0.567546 9.72517 0.282546Z"
              fill={fontColor}
              fillOpacity="0.7"
            />
          </motion.svg>
        </motion.div>
        <motion.svg
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          animate={searchOpen ? "closed" : "open"}
          variants={inputVariants}
          transition={{ duration: 0.2 }}
          onClick={() => setSearchOpen(true)}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.625 8.5001H9.0325L8.8225 8.2976C9.29121 7.75308 9.63377 7.11168 9.82566 6.41931C10.0176 5.72694 10.054 5.00072 9.9325 4.2926C9.58 2.2076 7.84 0.542603 5.74 0.287603C5.00171 0.194202 4.25184 0.270932 3.54777 0.51192C2.84369 0.752908 2.20408 1.15177 1.67787 1.67798C1.15166 2.20419 0.752801 2.8438 0.511813 3.54787C0.270825 4.25194 0.194096 5.00181 0.287496 5.7401C0.542496 7.8401 2.2075 9.5801 4.2925 9.9326C5.00061 10.0541 5.72684 10.0177 6.41921 9.82577C7.11158 9.63387 7.75297 9.29132 8.2975 8.8226L8.5 9.0326V9.6251L11.6875 12.8126C11.995 13.1201 12.4975 13.1201 12.805 12.8126C13.1125 12.5051 13.1125 12.0026 12.805 11.6951L9.625 8.5001ZM5.125 8.5001C3.2575 8.5001 1.75 6.9926 1.75 5.1251C1.75 3.2576 3.2575 1.7501 5.125 1.7501C6.9925 1.7501 8.5 3.2576 8.5 5.1251C8.5 6.9926 6.9925 8.5001 5.125 8.5001Z"
            fill={fontColor}
            fillOpacity="0.7"
          />
        </motion.svg>

        <div
          className={styles.switch}
          style={{ border: `1px solid rgba(${borderColor} 0.2)` }}
        >
          <p
            className={`${styles.sw_month} ${
              activeSwitch === "left" && styles.sw_active
            }`}
            onClick={() => setActiveSwitch("left")}
          >
            Month
          </p>
          <p
            className={`${styles.sw_week} ${
              activeSwitch === "right" && styles.sw_active
            }`}
            onClick={() => setActiveSwitch("right")}
          >
            Week
          </p>
          <motion.div
            className={styles.sw_active_box}
            style={{ border: `1px solid rgba(${borderColor} 1)` }}
            animate={activeSwitch}
            variants={switchVariants}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default CalendarNavbar;
