import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  background-color: ${({theme}) => theme.Colors.BACKGROUND_800};
  color: ${({theme}) => theme.Colors.WHITE};
  -webkit-font-smoothing : antialised
 }
 body, button, textarea,input {
  font-family: "Roboto Slab", serif;
  font-size: 16px;
  outline: none;

 }

 a {
  text-decoration: none;
 }

 a, button {
  cursor: pointer;
 transition: filter 0.2s;
 }

 a:hover, button:hover {
  filter: brightness(0.9);
 }
`