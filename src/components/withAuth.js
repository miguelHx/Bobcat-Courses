import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
  const Auth = new AuthService();
  return class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {
        username: null,
        isLoggedIn: false,
      }
      this.updateLoginStatus = this.updateLoginStatus.bind(this);
      this.updateLogoutStatus = this.updateLogoutStatus.bind(this);
    }

    updateLogoutStatus() {
      // TODO - redirect to index page from here
      Auth.logout();
      this.setState({
        username: null,
        isLoggedIn: false
      });
    }

    updateLoginStatus() {
      try {
        const username = Auth.getUsername();
        this.setState({
          username: username,
          isLoggedIn: true,
        });
      }
      catch(err) {
        Auth.logout();
        this.props.history.replace('/');
      }

    }

    componentWillMount() {
      if (!Auth.loggedIn()) {
        this.setState({ isLoggedIn: false });
      }
      else {
        this.updateLoginStatus();
      }
    }

    render() {
      return (
        <AuthComponent
          username={this.state.username}
          history={this.props.history}
          isLoggedIn={this.state.isLoggedIn}
          updateLoginStatus={this.updateLoginStatus}
          updateLogoutStatus={this.updateLogoutStatus}
        />
      );
    }

  }




}