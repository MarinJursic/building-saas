/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Head from "next/head";
import GanttMain from "../components/Gantt/Gantt";
import styles from "../public/static/empty.module.css";

export default function gantt() {
  return (
    <div className={styles.main} style={{ overflowX: "hidden" }}>
      <Head>
        <title>Gantt</title>
        <meta name="description" content="Home Builders Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GanttMain />
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
