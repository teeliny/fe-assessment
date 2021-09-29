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
    align-items: center;
    background: #ffffff;
    color: #3c3c3c;
    font-family: Fraunces, Barlow, "Segoe UI", Roboto, "Segoe UI Emoji", "Segoe UI Symbol";
    width: 100vw;
    overflow-x: hidden;
    /* justify-content: center;
    text-rendering: optimizeLegibility; */
  }

  html {
    font-size: 100%;
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }

  h1 {
    font-size: 72px;
    line-height: 72px;
  }

  h2 {
    font-size: 40px;
    line-height: 48px;
  }
  h3 {
    font-size: 32px;
    line-height: 36px;
  }
  h4 {
    font-size: 24px;
    line-height: 32px;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    font-family: Barlow;
  }

  button {
    background: #0E8784;
    color: #FEFCF7;
    border-radius: 6px;
    font-family: Fraunces;
    font-weight: 900;
    padding: 0.75rem 0;
    width: 217px;
    border: none;
  }

  button:hover {
    background: #66D2CF;
  }

  button:disabled {
    background: #E2DEDB;
  }

  
  @media(max-width: 800px) {
    font-size: 80%;
  }

  @media(max-width: 500px) {
    font-size: 60%;
  }
`