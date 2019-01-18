
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import ICODashboard from '~/ico-dashboard';
import store from '~/store';
import theme from './main-theme';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.palette.primary.blue100};
    font-family: 'Open Sans', sans-serif;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <ICODashboard />
      </React.Fragment>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
