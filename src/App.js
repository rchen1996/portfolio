import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/about'></Route>
        <Route path='/work'></Route>
        <Route path='/contact'></Route>
        <Route path='/'></Route>
      </Switch>
    </Router>
  );
}

export default App;
