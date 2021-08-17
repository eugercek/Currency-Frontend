import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(

  // <React.StrictMode>
  <ThemeProvider>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  //</React.StrictMode>,
  document.getElementById('root')
);