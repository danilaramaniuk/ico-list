
import React from 'react';
import ReactDOM from 'react-dom';
import ContributionModel from '~/common/models/contribution';
import App from './App';

ContributionModel.getAllContribution().then(r => r.json()).then((data) => {
  console.log(data);
});

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
