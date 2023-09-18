import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import 'que quiero importar' from 'donde esta lo que quiero importar'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


