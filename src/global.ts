import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    --global-fontsize: 1.3em;
    --sm: 576px;
    --md: 800px;
    --l: 992px;
    --xl: 1200px;
    --xxl: 1400px;
    text-rendering: optimizeLegibility;
  
  }
  

  `