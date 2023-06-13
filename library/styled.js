import { css } from "styled-components";

const breakpoint = "1000";

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
    H1: css`
      font-family: "IBM Plex Serif";
      font-style: normal;
      font-weight: 500;
      font-size: 39px;
      line-height: 51px;
      color: #fff;

      @media (max-width: 500px) {
        font-size: 30px;
      }
    `,
    H2: css`
      font-family: "IBM Plex Serif";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 42px;

      @media (max-width: 500px) {
        font-size: 28px;
      }
    `,
    B1: css`
      font-family: "IBM Plex Serif";
      font-size: 13px;
      font-weight: 450;

      @media (max-width: ${breakpoint}px) {
        font-size: 11px;
      }
    `,
    B2: css`
      font-family: IBM Plex Serif;
      font-size: 14px;
      font-weight: 450;

      @media (max-width: ${breakpoint}px) {
        font-size: 13.5px;
      }
    `,
    B2bold: css`
      font-family: "IBM Plex Serif";
      font-size: 14px;
      font-weight: 700;

      @media (max-width: ${breakpoint}px) {
        font-size: 13.5px;
      }
    `,
    B3: css`
      font-family: "IBM Plex Serif";
      font-size: 18px;
      font-weight: 450;
      @media (max-width: ${breakpoint}px) {
        font-size: 16px;
      }
    `,
    B4: css`
      font-family: "IBM Plex Serif";
      font-size: 20px;
      font-weight: 450;

      @media (max-width: ${breakpoint}px) {
        font-size: 18px;
      }
    `,
    B5: css`
      font-family: "IBM Plex Serif";
      font-size: 26px;
      font-weight: 500;

      @media (max-width: ${breakpoint}px) {
        font-size: 23px;
      }
    `,
  },
};
