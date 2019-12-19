import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Choose from './components/name/Choose';
import Choice from './components/chooseCards/Choice';
import Trophy from './components/trophy/Trophy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' exact component={Homepage}/>
          <Route path='/Choose' component={Choose}/>
          <Route path='/Choice' component={Choice}/>
          <Route path='/Trophy' component={Trophy}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;