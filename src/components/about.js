import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as styles from "../styles/about"

const ninaPic = require('../images/ninjirachiPic.png');

const About = () => (
  <div css={styles.container}>
  <img src={ninaPic} css={styles.image}/>
  <section css={styles.text}>
  <p>
    Presented by Isa, Athletica is a club night for club music (whatever that may be) - a genre spanning melting pot of sounds to make you dance and make you sweat.
  </p>
  <p>
Expect everything from ballroom to trance to rap to something new and weird we don’t have a name for yet. The one thing it has in common is that it’s fun as hell and will get you moving.
  </p>
  <p>
Gathering in Newtown’s sweaty basement, Tokyo Sing Song, every 6-8 weeks Athletica celebrates Aus DJs in their element and is a space for experimentation, sharing and community.
  </p>
  <p>
Also catch more Athletica goodness every month, streaming on Sydney’s Nomad Radio. With Isa at the helm and Aus guests in tow, it’s two hours exploring the full scope of international club sounds.
  </p>
  <p>
Contact us with comments, questions and song recs via email  ~ athleticaathletica@gmail.com
  </p>
</section>
</div>
);
export default About;
