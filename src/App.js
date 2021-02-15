import logo from './logo.svg';
import Header from './components/header/Header';
import MovieArea from './components/movieArea/MovieArea';
import styles from './styles/AppStyle.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <MovieArea />
    </div>
  );
}

export default App;
