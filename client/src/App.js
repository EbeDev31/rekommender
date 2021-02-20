import logo from './logo.svg';
import Header from './components/header/Header';
import MovieArea from './components/movieArea/MovieArea';
import styles from './styles/AppStyle.module.scss'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache()
// });

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.App}>
        <Header />
        <MovieArea />
      </div>
    </ApolloProvider>
  );
}

export default App;
