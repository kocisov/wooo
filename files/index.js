import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store'
import App from './containers/App'
import Home from './containers/Home'

import './css/index.css'

const store = configureStore({
  /* Initial State */
  loadingStatus: false
})
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        {/* Your routes here */}
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
