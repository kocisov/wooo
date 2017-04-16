import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

class App extends Component {
  render () {
    const { name } = this.props.user
    return (
      <div>
        <Header>
          <p>Welcome {name}</p>
        </Header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
