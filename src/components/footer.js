import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as styles from "../styles/footer";
const facebookIcon = require('../images/Facebook.svg');
const instagramIcon = require('../images/Instagram.svg');
const nomadIcon = require('../images/NomadRadio.svg');

const Footer = () => (
  <div css={styles.container}>
    <ul css={styles.socials}>
      <li>
        <img src={facebookIcon}/>
      </li>
      <li>
        <img src={instagramIcon}/>
      </li>
      <li>
        <img src={nomadIcon}/>
      </li>
    </ul>
    <section css={styles.respects}>
      Athletica takes place on stolen land. We recognise its true custodians,
      the Gadigal people of the Eora nation, and pay respect to elders past,
      present and emerging.
    </section>
  </div>
);

export default Footer;
