import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/nav/Nav';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="headWrapper">
          <Header />
          <Nav />
        </div>
        <main>
          <Switch>
            <Route exact path="/">
              <h2>Im home</h2>
            </Route>
            <Route exact path="/add">
              <h2>Im add a proverb</h2>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
