import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Chat } from './views/Chat';
import { ErrorPage } from './views/ErrorPage';
import { Login } from './views/Login';
import { Registration } from './views/Registration';

import { IUser } from './types';

interface State {
  user: IUser;
}

export class App extends Component<{}, State> {
  public state: Readonly<State> = {
    user: {
      id: '',
      name: '',
      avatar: '',
    },
  };

  private loginUser = (user: IUser): void => {
    this.setState({
      user: user,
    });
  };

  private logoutUser = (): void => {
    this.setState({
      user: {
        id: '',
        name: '',
        avatar: '',
      },
    });
  };

  render() {
    const { user } = this.state;
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/chat/:channelId?">
            {user.id ? (
              <Chat logoutUser={this.logoutUser} user={user} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/registration">
            <Registration loginUser={this.loginUser} />
          </Route>
          <Route path="/login">
            <Login loginUser={this.loginUser} />
          </Route>
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}
