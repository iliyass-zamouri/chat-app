import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);