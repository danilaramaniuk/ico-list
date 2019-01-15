
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// just for deploy test
fetch('http://localhost:3000/api/ico-user-list')
  .then(res => res.json())
  .then(data => console.log('test', data));

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
