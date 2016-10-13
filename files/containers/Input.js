import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    const { text } = this.state
    return (
      <div>
        <input
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loadingStatus: state.loadingStatus
  }
}

export default connect(mapStateToProps)(Input)