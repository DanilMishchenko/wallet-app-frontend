import { createGlobalStyle } from 'styled-components';
import CirceRegular from '../assets/fonts/Circe-Regular.woff';
import CirceBold from '../assets/fonts/Circe-Bold.woff';
import PoppinsRegular from '../assets/fonts/Poppins-Regular.woff';
import PoppinsBoldr from '../assets/fonts/Poppins-Bold.woff';

export const GlobalStyle = createGlobalStyle`
:root {
  --common-text: #000000;
  --primary-text: #ffffff;
  --secondary: #bdbdbd;
  --green: #24cca7;
  --blue: #4a56e2;
  --expense: #ff6596;
  --backdrop: rgba(0, 0, 0, 0.25);
  --outline: #e7e5f2;
  --light-gray: #e0e0e0;
  --grey-balance: #a6a6a6;
  --background-color: #E7EAF2;
}

@font-face {
  font-family: 'Circe';
  src: url(${CirceRegular}) format('woff');
  font-weight: 400;
  font-style: normal;

}

@font-face {
  font-family: 'Circe';
  src: url(${CirceBold}) format('woff');
  font-weight: 700;
  font-style: normal;

}

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsRegular}) format('woff');
  font-weight: 400;
  font-style: normal;


}

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsBoldr}) format('woff');
  font-weight: 700;
  font-style: normal;


}

body {
   margin: 0;
   font-family: 'Circe', sans-serif;
   font-weight: 400;
   background-color: var(--background-color);
 }

 a {
  text-decoration: none;
  outline: none;
  color: currentColor;
  cursor: pointer;
}

svg,
a {
  display: block;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}


ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
p {
  padding: 0;
   margin: 0;
 }

 a {
   text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
  `;
