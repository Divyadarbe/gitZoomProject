import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login.js';
import RepoList from './Components/RepoList';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/repo">
            <RepoList />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
