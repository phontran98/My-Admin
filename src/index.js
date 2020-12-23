import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import {BrowserRouter as Router} from 'react-router-dom'
import rootReducer from '../src/redux/rootReducer';

import {createMuiTheme , ThemeProvider} from '@material-ui/core'
import { red  ,blueGrey} from '@material-ui/core/colors';

import './index.css';
import App from './App';



const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer ,
  composeEnhacers(applyMiddleware(thunk))
);

const theme = createMuiTheme({
  palette : {
    primary: red,
    secondary : blueGrey
  }
})

ReactDOM.render(
  <Router>
    <Provider store ={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>    
    </Provider>
  </Router>,
  document.getElementById('root')
);

