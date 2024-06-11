import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #1e1e1e;
    color: #00ff00;
    font-family: 'VT323', monospace;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px; /* Updated to 20px */
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    color: #00ff00;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  .container {
    width: 100%;
    max-width: 1000px;
    padding: 20px;
    box-sizing: border-box;
  }

  section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 0;
  }

  .resume-container {
    display: flex;
    flex-wrap: wrap;
  }

  .main-content {
    flex: 3;
    padding-right: 20px;
  }

  .sidebar {
    flex: 1;
    padding-left: 20px;
  }
`;

export default GlobalStyles;
