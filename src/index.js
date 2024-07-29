import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloProviderWrapper from './ApolloClient';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ApolloProviderWrapper>
    <App />
  </ApolloProviderWrapper>,
  document.getElementById('root')
);
