import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import 'que quiero importar' from 'donde esta lo que quiero importar'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


