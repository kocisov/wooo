import React, { Component } from 'react'
import Header from '../components/Header'

export default class App extends Component {
  render () {
    return (
      <div>
        <Header>
          <h2>Logo</h2>
        </Header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
