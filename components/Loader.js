/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Loader.module.scss";
import Loading from "../public/imgs/Loading2.svg";
import Image from "next/image";
import { useSelector } from "react-redux";

function Loader() {
  const colormode = useSelector((state) => state.color.colormode);

  return (
    <div
      className={styles.loader}
      style={
        colormode === "dark"
          ? { backgroundColor: "#222328" }
          : { backgroundColor: "#f5f6fa" }
      }
    >
      <Image
        src={Loading}
        height="100"
        width="100"
        alt={Loading}
        className={styles.img}
      />
    </div>
  );
}

export default Loader;
