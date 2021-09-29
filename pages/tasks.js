import React from "react";
import Kanban from "../components/Kanban";
import Head from "next/head";
import styles from "../public/static/empty.module.css";

function tasks() {
  return (
    <div className={styles.main} style={{ height: "100%" }}>
      <Head>
        <title>Tasks</title>
        <meta name="description" content="Home Builders Web Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Kanban />
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

export default tasks;
