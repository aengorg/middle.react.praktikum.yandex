import React from "react";
import "./App.css";

import ChannelsList from "../../components/Channel/List";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <ChannelsList />
      </div>
      <div className="content">content</div>
    </div>
  );
}

export default App;
