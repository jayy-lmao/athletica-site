import { css } from "@emotion/core";

export const respects = css`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 15px;
text-align: center;
max-width: 400px;
margin:auto;
padding: 10px;
`

export const container = css`
  width:98%;
  padding-top: 35px;
  bottom: 0;
  color: white;
  position: fixed;
  text-align: center;
  background: rgb(2,0,36);
background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 65%, rgba(0,99,255,0) 100%);
`;

export const socials = css`
  list-style: none;
  padding-inline-start: 0px;
  > li {
 margin-left: 8vw;
 margin-right: 8vw;
    display: inline-block;
    }
`
