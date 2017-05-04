import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fakeLogin, logout } from '../../modules/user';
import './index.css';

class Home extends PureComponent {
  render() {
    const { name, isAuthenticated } = this.props.user;
    const { fakeLogin, logout } = this.props;

    return (
      <div className="home">
        {isAuthenticated
          ? <div>
              <h2>Hello, {name}</h2>
              <button onClick={logout}>Logout</button>
            </div>
          : <div>
              <h2>Hello</h2>
              <button onClick={fakeLogin}>Login</button>
            </div>}
      </div>
    );
  }
}

export default connect(({ user }) => ({ user }), {
  fakeLogin,
  logout
})(Home);
