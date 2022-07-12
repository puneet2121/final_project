import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home'

 const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  )
}

export default App