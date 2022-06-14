import 'reset-css';
import { createGlobalStyle } from 'styled-components';

import '@rainbow-me/rainbowkit/styles.css';
import 'react-flexbox-grid/dist/react-flexbox-grid.css';

export default createGlobalStyle`
  body {
    background-color: #140F2D;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  b {
    font-weight: bold;
  }
`;
