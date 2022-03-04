import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    background: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    font-size: 62.5%;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 56.25%;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 50%;
    }
  }
`;

export default GlobalStyle;
