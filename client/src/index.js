
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ICODashboard from '~/ico-dashboard';
import store from '~/store';


ReactDOM.render(
  <Provider store={store}>
    <ICODashboard />
  </Provider>,
  document.getElementById('root'),
);
