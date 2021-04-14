import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Company from './pages/Company';
import Candidate from './pages/Candidate';
import Guide from './pages/Guide';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/company'>
          <Company />
        </Route>
        <Route exact path='/candidate'>
          <Candidate />
        </Route>
        <Route exact path='/guide'>
          <Guide />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
