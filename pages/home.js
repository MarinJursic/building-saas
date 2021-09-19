import React from "react";
import Homepage from "../components/Home/Home";
import Head from "next/head";
import styles from "../public/static/empty.module.css";
import { motion } from "framer-motion";

function home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Dvi kosulje ez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
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

export default home;
