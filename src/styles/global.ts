import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    text-align: left;
    border: 0;
    color: #23292e;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: block;
    max-width: 100%;
}

input,
button,
textarea {
    appearance: none;
}
  
  button {
    cursor: pointer !important;
  }

  .container {
    width: 100%;
    max-width: 1246px;
    padding: 0px 15px;
    margin: 0px auto;
}
`;
