import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StateProvider} from './provider/Context'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
