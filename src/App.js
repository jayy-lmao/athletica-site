import React from "react";
import logo from "./logo.svg";
import Nav from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";
import Routes from "./Routes";
import * as styles from "./styles/app";
import { Helmet } from "react-helmet";

/** @jsx jsx */
import { jsx } from "@emotion/core";

const App = () => (
  <div css={styles.appStyle}>
    <Helmet>
      <style>{"body { background-color: black; }"}</style>
    </Helmet>
    <Nav />
    <main>
      <Routes />
    </main>
    <Footer />
  </div>
);

export default App;
