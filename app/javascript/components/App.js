import React, { useState } from "react";
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Home from '../components/Home';
import House from '../components/House';
import ChoreList from "./ChoreList";
import { useCookies } from "react-cookie";
import axios from 'axios';


const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [isLogin, setIslogin] = useState(false)
  const [username, setUsername] = useState('')
  const [userData, setUserdata] = useState({})
  const history = useHistory()
  function login(e) {
    e.preventDefault()
    axios.post('http://localhost:3000/api/v1/login', { name: username })
      .then((result) => {

        if (result.data && result.data.user) {
          setCookie("user", result.data.user);
          setUserdata(result.data.user)
          console.log(result.data, "con")
          setIslogin(true)
        } else {
          //handle bad login
          setIslogin(false)
        }
      })
  }
  function logout() {
    removeCookie("user");
    history.push('/')
    setIslogin(false)
  }
  return (
    <div>
      <Switch>

        <Route path="/house/:houseId">
          <House removeCookie={removeCookie} setCookie={setCookie}
            cookies={cookies}
            logout={logout}
            isLogin={isLogin}
            userData={userData}
          />
        </Route>
        <Route path={`/house/${userData.house_id}/chores`}>
        <ChoreList />
        </Route>
        <Route exact path="/">
          {isLogin ?
            <Redirect to={`/house/${userData.house_id}`} /> :
            <Home setCookie={setCookie}
              cookies={cookies} login={login}
              username={username}
              setUsername={setUsername}
            />}
        </Route>
      </Switch>
    </div>
  )
}


export default App