import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './index.css';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Hello</h2>
      </div>
    );
  }
}

export default connect(
  state => state,
)(Home);
