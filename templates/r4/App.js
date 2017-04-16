import React, { Component } from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';

import store from './store';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Layout} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
