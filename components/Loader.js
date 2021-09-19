/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Loader.module.scss";
import Loading from "../public/imgs/Loading2.svg";
import Image from "next/image";

function Loader() {
  return (
    <div className={styles.loader}>
      <Image src={Loading} height="100" width="100" alt={Loading} />
    </div>
  );
}

export default Loader;
