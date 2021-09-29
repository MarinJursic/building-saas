import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Head from "next/head";
import styles from "../public/static/empty.module.css";
function calendar() {
  return (
    <div className={styles.main} style={{ height: "100%" }}>
      <Head>
        <title>Calendar</title>
        <meta name="description" content="Home Builders Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calendar />
    </div>
  );
}

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 250);
  });

  return {
    props: {},
  };
}

export default calendar;
