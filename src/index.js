import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './Register';
import Login from './Login';
import AccountList from './AccountList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Register />
    <Login />
    <AccountList />
  </React.StrictMode>
);