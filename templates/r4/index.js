import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

import './static/normalize.css';
import './static/index.css';

// TODO: Rewrite this with rr-redux v5

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
