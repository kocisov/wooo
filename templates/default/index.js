import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'

import App from './containers/App'
import Home from './containers/Home'

import './static/normalize.css'
import './static/index.css'

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        {/* Your routes here */}
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
