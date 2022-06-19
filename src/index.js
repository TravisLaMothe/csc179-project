import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createVendiaClient } from '@vendia/client';

export const client = createVendiaClient({
  apiUrl: `https://48980qxx34.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://0ei6sdgauc.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: `CYpcFyh7yYvUsnuY9gT6CrqooZnDq4iXpzmT8BzidBBy`,
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
