import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Layout */
    --Mobile-Layout: 375px;
    --Desktop-Layout: 1440px;

    /* Primary Colors */
    --Light-red: #ff5757;
    --Orangey-yellow: #ffb01f;
    --Green-teal: #00bd91;
    --Cobalt-blue: #1125d4;

    /* Gradients Colors */
    --Light-slate-blue: #7857ff;
    --Light-royal-blue: #2e2be8;
    --Violet-blue: #4e21ca;
    --Persian-blue: #2421ca00;

    /* Neutral Colors */
    --White: #ffffff;
    --Pale-blue: #ebf1ff;
    --Light-lavender: #c8c7ff;
    --Dark-gray-blue: #303b59;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--White);
  }
`;

export default GlobalStyle;
