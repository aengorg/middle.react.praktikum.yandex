import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import { Chat } from './views/Chat';
import { ErrorPage } from './views/ErrorPage';
import { Home } from './views/Home';
import { Login } from './views/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chat/:channelId?" component={Chat} />
        <Route path="/registration" />
        <Route path="/login" component={Login} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
