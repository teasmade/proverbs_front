import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import LangContext from './context/LangContext';

import Header from './components/layout/Header';
import Nav from './components/nav/Nav';
import Home from './views/home/Home';

import './App.css';

function App() {
  // default state for the context
  const lang = useState('en');

  return (
    <LangContext.Provider value={lang}>
      <Router>
        <div className="App">
          <div className="headWrapper">
            <Header />
            <Nav />
          </div>
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/add">
                <h2>Im add a proverb</h2>
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </LangContext.Provider>
  );
}

export default App;
