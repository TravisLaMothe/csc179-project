import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createVendiaClient } from '@vendia/client';

export const client = createVendiaClient({
  apiUrl: `https://md3xpi1o8a.execute-api.us-west-1.amazonaws.com/graphql/`,
  websocketUrl: `wss://q1zdumsj45.execute-api.us-west-1.amazonaws.com/graphql`,
  apiKey: `Eezyve5qyV4zVksna25GAP7Zs7i8WiVNPghzkM5tWbUq`,
  //apiKey: process.env.VENDIA_API_KEY
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
