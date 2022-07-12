import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../components/Home';
import House from '../components/House';
import ChoreList from "./ChoreList";

 const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/house/1" component={House}></Route>
        <Route exact path="/house/1/chores" component={ChoreList}></Route>
      </Switch>
    </div>
  )
}

export default App