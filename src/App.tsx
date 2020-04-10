import React from 'react';
import { Header } from './Components/Header';
import HomePage from './Components/HomePage';
import { fontFamily, fontSize, gray2 } from './Components/Styles';
/**@jsx jsx */
import { css, jsx } from '@emotion/core';

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
