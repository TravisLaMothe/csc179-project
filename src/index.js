import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './i18n';
import { createVendiaClient } from '@vendia/client';

export const client = createVendiaClient({
  // apiUrl: `https://mpoqlxa1p5.execute-api.us-west-2.amazonaws.com/graphql/`,
  // websocketUrl: `wss://m02lhbr6v6.execute-api.us-west-2.amazonaws.com/graphql`,
  // apiKey: `77ppVdvaCmNuoJmQjhKJetNjgF5wPkTTDtQssczzTfrB`,

  apiUrl: `https://qk8mmq1smj.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://tekfqkrbd2.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: `42DCfzCYrcqqUvLGYGVa7RyZcjBkLtsyc8VnFtoBqdnu`,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
