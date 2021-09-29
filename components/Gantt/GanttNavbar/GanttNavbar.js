import React, { useState, useEffect } from "react";
import styles from "../../../styles/GanttNavbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { switchColormode } from "../../../redux/actions/colormodeActions";
import { changeName } from "../../../redux/actions/infoActions";
import { Slider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

function GanttNavbar({ setViewMode }) {
  const dispatch = useDispatch();
  const colormode = useSelector((state) => state.color.colormode);
  const name = useSelector((state) => state.info.name);

  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const [bgColor, setBgColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  const [secFontColor, setSecFontColor] = useState("#5a5e6e");
  const [borderColor, setBorderColor] = useState("0, 0, 0,");

  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      black: {
        light: "#000000",
        main: "#000000",
        dark: "#000000",
        contrastText: "#000",
      },
      white: {
        light: "#fff",
        main: "#fff",
        dark: "#fff",
        contrastText: "#fff",
      },
    },
  });

  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);
    if (value === 0) {
      setViewMode("Day");
    } else if (value === 50) {
      setViewMode("Week");
    } else {
      setViewMode("Month");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const save = () => {
    dispatch(changeName(newName));
    setEditing(false);
  };

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("white");
      setFontColor("black");
      setSecFontColor("#5a5e6e");
      setBorderColor("0, 0, 0,");
    } else {
      setBgColor("#323339");
      setFontColor("white");
      setSecFontColor("#a7a7a9");
      setBorderColor("255, 255, 255,");
    }
  }, [colormode]);

  return (
    <div
      className={`${styles.navbar} ${
        colormode === "dark" && styles.navbar_dark
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
      <div className={styles.right}>
        <div className={styles.viewSlider}>
          <h2 style={{ color: secFontColor }}>View</h2>
          <ThemeProvider theme={theme}>
            <Slider
              defaultValue={value}
              min={0}
              max={100}
              step={50}
              color={fontColor}
              onChange={(e) => setValue(e.target.value)}
            />
          </ThemeProvider>
        </div>
        <div className={styles.options}>
          <div className={styles.settings}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10C9.10457 10 10 9.1046 10 8.00003C10 6.89546 9.10457 6.00003 8 6.00003C6.89543 6.00003 6 6.89546 6 8.00003C6 9.1046 6.89543 10 8 10Z"
                fill={secFontColor}
                fillOpacity="0.7"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.6251 8.00004C13.6251 8.25504 13.6026 8.49504 13.5726 8.73503L15.1551 9.97254C15.2976 10.085 15.3351 10.2875 15.2451 10.4525L13.7451 13.0475C13.6776 13.1675 13.5501 13.235 13.4226 13.235C13.3776 13.235 13.3326 13.2275 13.2876 13.2125L11.4201 12.4625C11.0301 12.755 10.6101 13.01 10.1526 13.1975L9.86762 15.185C9.84512 15.365 9.68762 15.5 9.50012 15.5H6.50012C6.31262 15.5 6.15512 15.365 6.13262 15.185L5.84762 13.1975C5.39012 13.01 4.97012 12.7625 4.58012 12.4625L2.71262 13.2125C2.6292 13.2439 2.53733 13.2445 2.4535 13.2143C2.36966 13.184 2.29934 13.1249 2.25512 13.0475L0.755124 10.4525C0.665124 10.2875 0.702624 10.085 0.845124 9.97254L2.42762 8.73503C2.39762 8.49504 2.37512 8.24754 2.37512 8.00004C2.37512 7.75253 2.39762 7.50504 2.42762 7.26504L0.845124 6.02753C0.702624 5.91503 0.657624 5.71253 0.755124 5.54753L2.25512 2.95254C2.32262 2.83254 2.45012 2.76504 2.57762 2.76504C2.62354 2.76518 2.66914 2.77278 2.71262 2.78754L4.58012 3.53754C4.97012 3.24504 5.39012 2.99004 5.84762 2.80254L6.13262 0.815035C6.15512 0.635035 6.31262 0.500035 6.50012 0.500035H9.50012C9.58923 0.498802 9.67572 0.530119 9.74338 0.588112C9.81104 0.646106 9.85521 0.726791 9.86762 0.815035L10.1526 2.80254C10.6101 2.99004 11.0301 3.23753 11.4201 3.53754L13.2876 2.78754C13.371 2.75619 13.4629 2.75558 13.5467 2.78581C13.6306 2.81605 13.7009 2.87515 13.7451 2.95254L15.2451 5.54753C15.3351 5.71253 15.2976 5.91503 15.1551 6.02753L13.5726 7.26504C13.6026 7.50504 13.6251 7.74504 13.6251 8.00004ZM12.1251 8.00004C12.1251 7.84254 12.1176 7.68504 12.0876 7.45254L11.9826 6.60504L12.6501 6.08003L13.4526 5.44254L12.9276 4.53504L11.9751 4.91753L11.1801 5.24004L10.4976 4.71503C10.1976 4.49004 9.89762 4.31753 9.57512 4.18254L8.78012 3.86003L8.51762 2.00004H7.47512L7.32512 3.01254L7.20512 3.86003L6.41012 4.18254C6.10262 4.31003 5.79512 4.49004 5.47262 4.73003L4.79762 5.24004L4.01762 4.92503L3.06512 4.54253L2.54012 5.45004L3.35012 6.08003L4.01762 6.60504L3.91262 7.45254C3.89012 7.67754 3.87512 7.85004 3.87512 8.00004C3.87512 8.15003 3.89012 8.32253 3.91262 8.55503L4.01762 9.40254L3.35012 9.92754L2.54012 10.5575L3.06512 11.465L4.01762 11.0825L4.81262 10.76L5.49512 11.285C5.79512 11.51 6.09512 11.6825 6.41762 11.8175L7.21262 12.14L7.47512 14H8.52512L8.67512 12.9875L8.79512 12.14L9.59012 11.8175C9.89762 11.69 10.2051 11.51 10.5276 11.27L11.2026 10.76L11.9826 11.075L12.9351 11.4575L13.4601 10.55L12.6501 9.92004L11.9826 9.39503L12.0876 8.54753C12.1101 8.32253 12.1251 8.15754 12.1251 8.00004Z"
                fill={secFontColor}
                fillOpacity="0.7"
              />
            </svg>
          </div>
          <div
            className={styles.export}
            style={{
              color: fontColor,
              border: `1px solid rgba(${borderColor} 0.25)`,
            }}
          >
            Export
          </div>
        </div>
      </div>
    </div>
  );
}

export default GanttNavbar;
