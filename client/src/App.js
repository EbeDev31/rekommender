import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Header from './components/header/Header';
import MovieArea from './components/movieArea/MovieArea';

import styles from './styles/AppStyle.module.scss'


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
