import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #fff;
    --color-primary-red: #f33f3f;
    --color-grey: #eee;
    --color-grey-2: #4a4a4a;
    --color-black: #1e1e1e;
    --color-black-2: #121212;
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
