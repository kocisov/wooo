import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from './store';
import App from './containers/App';

const history = createHistory();
const el = document.getElementById('root');

const store = createStore(history);

function r(Component) {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>,
    el
  );
}

r(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    r(NextApp);
  });
}
