import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link, withRouter } from "react-router-dom";
import * as styles from "../styles/nav";

const athleticaLogo = require("../images/athletica-title.png");

const nav = () => (
  <>
    <img src={athleticaLogo} css={styles.logo} />
    <ul css={styles.navbar}>
      <li>
        <Link to="/">Stream</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://athletica.bigcartel.com/"
        >
          Merch
        </a>
      </li>
    </ul>
  </>
);

export default nav;
