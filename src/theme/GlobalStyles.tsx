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
      }
      html {
        height: 100%;
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
