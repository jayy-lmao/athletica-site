import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link, withRouter } from "react-router-dom";
import * as styles from "../styles/nav";

const nav = () => (
  <ul css={styles.navbar}>
    <li>
      <Link to="/">Stream</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/merch">Merch</Link>
    </li>
  </ul>
);

export default nav;
