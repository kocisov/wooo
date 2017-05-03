import React, { Component } from 'react';
import Header from '../components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
