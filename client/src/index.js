import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from "react-apollo";

import App from './components/App';

//Apollo Store
const cache = new InMemoryCache();
const link = new HttpLink({
 uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  link: link,
  cache: cache,
  dataIdFromObject: o => o.id
});

// const App = () => {
//   return (
//     <ApolloProvider client={client}>
//       <HashRouter> 
//         <Route path="/" exact component={SongList} />
//       </HashRouter> 
//     </ApolloProvider>    
//   );
// };

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>  ,
  document.querySelector('#root')
);