import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as styles from "../styles/main";

const Main = () => (
  <div css={styles.section}>
  <div css={styles.container}>
    <iframe
      css={styles.videoPlayer}
      src="https://www.youtube.com/embed/hHW1oY26kxQ"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</div>
);

export default Main;
