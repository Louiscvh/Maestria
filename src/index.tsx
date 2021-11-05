import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App.js';
import Cursor from "./components/Cursor.js"

ReactDOM.render(
  <React.StrictMode>
    <Cursor />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);