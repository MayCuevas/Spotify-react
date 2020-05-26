import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { LoginContextProvider } from './contexts/LoginContext';


ReactDOM.render(
  <React.StrictMode>
     <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
