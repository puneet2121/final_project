import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../components/Home';
import House from '../components/House';
import ChoreList from "./ChoreList";
import { useCookies } from "react-cookie";

 const App = () => {
  const [cookies, setCookie,removeCookie] = useCookies(["user"]);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home setCookie={setCookie} cookies={cookies}/>
        </Route>
        <Route exact path="/house/1">
        <House removeCookie={removeCookie}/>
        </Route>
        <Route exact path="/house/1/chores" component={ChoreList}></Route>
      </Switch>
    </div>
  )
}

export default App