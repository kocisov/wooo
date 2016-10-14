import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    const { loadingStatus } = this.props
    return (
      <div>
        <h2>Home Component</h2>
        {loadingStatus &&
          <div>Loading...</div>
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loadingStatus: state.loadingStatus
  }
}

export default connect(mapStateToProps)(Home)
