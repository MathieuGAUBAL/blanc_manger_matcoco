import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' exact component={Homepage}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
