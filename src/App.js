import { BrowserRouter as Router } from 'react-router-dom';
import { withMainContext } from './common/contexts/main-context';
import Header from './layouts/header';
import Main from './layouts/main';
import Footer from './layouts/footer';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default withMainContext(App);
