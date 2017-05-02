import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fakeLogin } from '../../modules/user';
import './index.css';

class Home extends PureComponent {
  render() {
    const { name, isAuthenticated } = this.props.user;
    const { fakeLogin } = this.props;

    return (
      <div>
        {isAuthenticated
          ? (
            <div>
              <h2>Hello, {name}</h2>
            </div>
          ) : (
            <div>
              <h2>Hello</h2>
              <button onClick={fakeLogin}>Login</button>
            </div>
          )
        }
      </div>
    );
  }
}

export default connect(({ user }) => ({ user }), {
  fakeLogin
})(Home);
