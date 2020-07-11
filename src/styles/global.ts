import { createGlobalStyle } from 'styled-components';
import githubLogo from '../assets/githubLogo.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f0f0f5 url(${githubLogo}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
    backgroud
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button { 
    cursor: pointer;
  }
`;
