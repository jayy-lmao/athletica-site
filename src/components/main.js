import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as styles from "../styles/main";

const Main = () => (
  <div>
    <iframe
      css={styles.videoPlayer}
      src="https://www.youtube.com/embed/hHW1oY26kxQ?controls=0"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
);

export default Main;
