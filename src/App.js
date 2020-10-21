import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainHeader from './components/MainHeader';
import LandingPage from './components/LandingPage';
import Kanban from './components/Projects/Kanban';

function App() {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/portfolio'></Route>
        <Route exact path='/kanban'>
          <Kanban />
        </Route>
        <Route path='/'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
