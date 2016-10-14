import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../modules/loadingStatus'

class App extends Component {
  render () {
    const { changeLoadingStatus, loadingStatus } = this.props
    const loading = loadingStatus ? false : true
    return (
      <div>
        <div onClick={() => {
          changeLoadingStatus(loading)
        }}>
          Change loading status to {`${loading}`}
        </div>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loadingStatus: state.loadingStatus
  }
}

export default connect(mapStateToProps, actionCreators)(App)
