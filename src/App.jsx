import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import LangContext from './context/LangContext';

import Header from './components/layout/Header';
import Nav from './components/nav/Nav';
import Home from './views/home/Home';
import AddProverb from './views/addproverb/AddProverb';
import OneProverb from './views/oneproverb/OneProverb';

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
              <Route path="/proverbs/:id" component={OneProverb} />
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/add">
                <AddProverb />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </LangContext.Provider>
  );
}

export default App;
