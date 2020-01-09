import { css } from "@emotion/core";

export const section = css`
margin: auto;
width: 90%;
margin-bottom: 140px;
`

export const container = css`
  position: relative;
  @media only screen and (max-width: 600px) {
    margin-top: 70px;
  }
  padding-bottom: 40.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
`;
export const videoPlayer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 728) {
    height: 90%;
  }
`;
