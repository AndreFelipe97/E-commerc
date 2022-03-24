import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #fff;
    --color-primary-red: #f33f3f;
    --color-grey: #eee;
    --color-grey-2: #4a4a4a;
    --color-black: #1e1e1e;
    --color-black-2: #121212;
    --color-black-3: #232323;

    --bp-phone: 37.5em; // max-width: 37.5em
    --bp-tab-port: 56.25em; // max-width: 56.25em
    --bp-tab-land: 75em; // max-width: 75em
    --bp-big-desktop: 112.5em; // min-width: 112.5em
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
  }

  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
