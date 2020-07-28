import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import React from 'react';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: black;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      img {
        max-width: 100%;
      }
      footer,
      header,
      body {
        font-size: 14px;
        line-height: 1.4em;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        padding: 0;
        font-weight: 400;
      }

      a {
        text-decoration: none;
        color: inherit;
        margin: 0;
      }

      ul,
      li,
      ol {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

      dl,
      dd {
        margin-bottom: 0;
      }

      figure {
        margin: 0;
      }

      button {
        padding: 0;
        cursor: pointer;
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
      }

      p {
        margin: 0;
      }

      .visually-hidden {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }

      .inactive {
        pointer-events: none;
      }
    `}
  />
);
export default GlobalStyles;
