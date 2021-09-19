import "../styles/globals.css";
import "../styles/gantt.scss";
import Sidebar from "../components/Sidebar";

import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import Router from "next/router";
import { useState } from "react";
import Loader from "../components/Loader";
import Head from "next/head";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const store = useStore(pageProps.initialReduxState);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <Provider store={store}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Sidebar />
      {loading ? <Loader /> : <Component {...pageProps}></Component>}
    </Provider>
  );
}

export default MyApp;
