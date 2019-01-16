
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import ICODashboard from '~/ico-dashboard';
import store from '~/store';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <GlobalStyle />
      <ICODashboard />
    </React.Fragment>
  </Provider>,
  document.getElementById('root'),
);
