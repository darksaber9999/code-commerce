import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import CodeCommerce from './js/CodeCommerce';
import reportWebVitals from './js/testing/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CodeCommerce />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
