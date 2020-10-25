import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import MainPage from './components/MainPage';

import './App.css';
import DumbQuote from './components/DumbQuote';

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/quote" component={DumbQuote} />
      </Router>
    </div>
  );
}

export default App;
