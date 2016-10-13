import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store'
import App from './containers/App'

const store = configureStore({
  /* Initial State */
  loadingStatus: false
})
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        {/* Your routes here */}
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
