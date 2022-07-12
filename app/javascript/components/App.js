import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home'
import House from '../components/House'

 const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/house/:id" component={House}></Route>
      </Switch>
    </div>
  )
}

export default App