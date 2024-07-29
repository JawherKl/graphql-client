import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8080/query', // Assurez-vous que cette URL est correcte
  }),
  cache: new InMemoryCache(),
});

const ApolloProviderWrapper = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default ApolloProviderWrapper;
