import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

it('renders Header', () => {
  const div = document.createElement('div')
  ReactDOM.render((
    <Header>
      <h2>Hello</h2>
    </Header>
  ), div)
})
