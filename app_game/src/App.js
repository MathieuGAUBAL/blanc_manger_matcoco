import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Choose from './components/name/Choose';
import Choice from './components/chooseCards/Choice';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' exact component={Homepage}/>
          <Route path='/Choose' component={Choose}/>
          <Route path='/Choice' component={Choice}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
