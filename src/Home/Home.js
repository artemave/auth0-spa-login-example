import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  login() {
    this.props.auth.login()
  }

  async componentWillMount() {
    const userInfo = await this.props.auth.getUserInfo()
    this.setState({userName: userInfo.name})
  }

  render() {
    const { isAuthenticated, getUserInfo } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <h4>
            {
              this.state.userName ?
                `You are logged in as ${this.state.userName}`
                : 'You are logged in!'
            }
            </h4>
          )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
