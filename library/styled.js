import { css } from "styled-components";

module.exports = {
  color: {
    red: "#5C0007",
    green: "#006130",
    midnight: "#011542",
    marina: "#AEFFF7",
    amethyst: "#8A46AC",
    apricot: "#F28B74",
    white: "white",
    black: "black",
    gray: "#999",
  },
  font: {
    heading: "'IBM Plex Mono'",
    body: "'IBM Plex Serif'",
  },
  typography: {
    B1: css`
      font-family: "IBM Plex Serif";
      font-size: 14px;
      font-weight: 500px;
    `,
    B2: css`
      font-family: "IBM Plex Serif";
      font-size: 16px;
      font-weight: 500px;
    `,
    B2bold: css`
      font-family: "IBM Plex Serif";
      font-size: 16px;
      font-weight: 700px;
    `,
    B3: css`
      font-family: "IBM Plex Serif";
      font-size: 20px;
      font-weight: 500px;
    `,
    B4: css`
      font-family: "IBM Plex Serif";
      font-size: 22px;
      font-weight: 500px;
    `,
  },
};
