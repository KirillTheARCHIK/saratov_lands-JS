import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import {Provider} from 'react-redux'
import store from './redux/Store'
import theme from './theme';
import {ThemeProvider} from '@mui/material'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
