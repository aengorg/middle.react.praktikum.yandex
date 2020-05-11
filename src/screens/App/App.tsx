import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

import { withRouter } from 'react-router';
import { Chat } from '../../components/Chat';

function App() {
  return (
    <div className="app">
      <Switch>
        <Redirect exact from="/" to="/chat" />
        <Route path="/chat/:channelId?" component={Chat} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
