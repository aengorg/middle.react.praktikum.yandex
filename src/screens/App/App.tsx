import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.scss';

import { Chat } from '../../components/Chat';

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/chat/:channelId?" component={Chat} />
      </div>
    </Router>
  );
}

export default App;
