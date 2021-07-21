import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/nav/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
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
