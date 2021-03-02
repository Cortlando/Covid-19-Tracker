import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './components/Main'
import Global from './components/Global'
import USA from './components/USA'
//import CountriesTable from './components/CountriesTable'
import Countries from './components/Countries'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/Global' component={Global}/>
        <Route exact path='/USA' component={USA }/>
        <Route exact path='/Countries' component={Countries} />
      </Switch>
    </Router>
  );
}

export default App;