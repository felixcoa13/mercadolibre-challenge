import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider, loadApiCache } from 'react-use-api'

loadApiCache();

//Es igual a render(), pero es utilizado para hidratar un contenedor cuyo contenido HTML fue renderizado por ReactDOMServer.
//https://es.reactjs.org/docs/react-dom.html
ReactDOM.hydrate(
  <ApiProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </ApiProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
