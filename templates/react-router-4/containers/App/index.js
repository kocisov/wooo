import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
