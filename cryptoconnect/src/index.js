import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import { reducers } from './redux_BITS/reducers';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import CryptoContext from './CryptoContext'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  
  <React.StrictMode>
  <Provider store={store}>
    <CryptoContext>
      <App />
    </CryptoContext>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer_html')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
