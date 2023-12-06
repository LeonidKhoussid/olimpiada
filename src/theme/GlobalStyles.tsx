import * as React from "react";
import { css, Global } from "@emotion/react";

export default () => (
  <Global
    styles={css`
      * {
        outline: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &::-webkit-scrollbar {
          width: 6px;
          &:hover {
            // width: 15px;
          }
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          width: 10px;
          height: 200px;
          min-height: 0;
          background-color: #28a3cc;

          &:hover {
            background-color: #28a3cc;
          }

          &:active {
            background-color: #33ccff;
          }
        }

        &::-webkit-scrollbar-track {
          background: #000000;

          &:hover {
            background-color: #145166;
          }
        }
      }
      html {
        height: 100%;
        font-family: "Alumni";
        font-weight: 500;
        text-transform: uppercase;
      }

      body {
        height: 100%;
      }
      #root {
        height: 100%;
      }
    `}
  />
);
