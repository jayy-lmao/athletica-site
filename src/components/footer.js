import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as styles from "../styles/footer";
const facebookIcon = require("../images/Facebook.svg");
const instagramIcon = require("../images/Instagram.svg");
const nomadIcon = require("../images/NomadRadio.svg");

const Footer = () => (
  <div css={styles.container}>
    <ul css={styles.socials}>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/athleticaaa"
        >
          <img src={facebookIcon} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/athleticaaa/"
        >
          <img src={instagramIcon} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nomadradio.fm/show/athletica"
        >
          <img src={nomadIcon} />
        </a>
      </li>
    </ul>
    <div css={styles.separator} />
    <section css={styles.respects}>
      Athletica takes place on stolen land. We recognise its true custodians,
      the Gadigal people of the Eora nation, and pay respect to elders past,
      present and emerging.
    </section>
  </div>
);

export default Footer;
