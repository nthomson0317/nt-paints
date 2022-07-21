import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Add imports for ReactRouterDOM
import { 
  BrowserRouter as Router
} from 'react-router-dom';
// // REDUX CODE
// // import { createStore, combineReducers } from 'redux'
// // import { Provider } from 'react-redux'

ReactDOM.render((
  <Router>
      <App />
  </Router>),
  document.getElementById('root')
);