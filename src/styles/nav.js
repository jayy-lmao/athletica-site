import { css } from "@emotion/core";

export const logo = css`
  height: 50px;
`;

export const navbar = css`
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  padding: 2em;

  > li {
 margin-left: 5vw;
 margin-right: 5vw;
    display: inline-block;
  > a,
    button {
      text-decoration: none;
      background: none;
      border: none;
      font-size: 24px;
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      :hover {
        color: grey;
      }
    }
`;
