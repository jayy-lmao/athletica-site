import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as styles from "../styles/footer";

const Footer = () => (
  <div css={styles.container}>
    <section>Facebook Instagram NR</section>
    <section>
      Athletica takes place on stolen land. We recognise its true custodians,
      the Gadigal people of the Eora nation, and pay respect to elders past,
      present and emerging.
    </section>
  </div>
);

export default Footer;
