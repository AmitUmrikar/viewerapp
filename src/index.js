import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Viewer from './Viewer';
import Routers from './Components/Routers/Routers';
import {Auth0Provider} from '@auth0/auth0-react';
require('dotenv').config();

const domain = process.env.REACT_APP_AUTH0_DOMAIN; 
const clientId = process.env.REACT_APP_AUTH0_CLIENTID;

ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri= {window.location.origin+ "/home"}>
    <Routers />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
