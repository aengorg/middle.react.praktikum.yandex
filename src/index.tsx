import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

if (!localStorage.getItem('user')) {
  localStorage.setItem(
    'user',
    JSON.stringify([
      {
        id: '55',
        name: 'Me!',
        avatar: 'https://i.pravatar.cc/70?img=55',
      },
    ])
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
