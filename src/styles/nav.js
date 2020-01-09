import { css } from "@emotion/core";

export const logo = css`
  width: 343px;
  height: 36.95px;
  margin-top: 23px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const navbar = css`
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  padding: 0.75em;

  > li {
 margin-left: 5%;
 margin-right: 5%;
    display: inline-block;
  > a,
    button {
      text-decoration: none;
      background: none;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;

      border: none;
      color: white;
      cursor: pointer;
      :hover {
        color: grey;
      }
    }
`;
