import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store'
import App from './containers/App'
import Input from './containers/Input'

const store = configureStore({
  /* Initial State */
  loadingStatus: false
})
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/input" component={Input} />
        {/* Your routes here */}
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
