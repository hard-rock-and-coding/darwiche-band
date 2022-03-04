import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import BandLogo from './components/BandLogo.js';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className={styles.App}>
      <Container className={styles.Main}>
          <Header />
          <BandLogo/>
          <Footer />
      </Container>
    </div>
  );
}

export default App;
