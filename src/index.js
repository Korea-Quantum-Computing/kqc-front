import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "../src/locales/i18n";

const engine = new Styletron();
const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <App />
      {/* <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img style = {{height: '300px'}} src = {require('./images/underConstruction.gif')} alt = 'construction'/>
      </div> */}
      
    </StyletronProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
