import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Home from '../components/Home';
import House from '../components/House';
import ChoreList from "./ChoreList";
import { useCookies } from "react-cookie";
import axios from 'axios';
import TextLinkExample from "./Nav";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [isLogin, setIslogin] = useState(false)
  const [username, setUsername] = useState(null)
  const [userData, setUserdata] = useState({})
  const history = useHistory()
  useEffect(() => {
    if (cookies.user && cookies.user.id) {

      axios.get(`http://localhost:3000/api/v1/users/${cookies.user.id}`)
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
  }, [])

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
  console.log("this is the user data", userData)
  return (
    <div>
      <TextLinkExample userData={userData}
        isLogin={isLogin} />
      <Switch>

        <Route exact path={`/house/${userData.house_id}`}>
          <House removeCookie={removeCookie} setCookie={setCookie}
            cookies={cookies}
            logout={logout}
            isLogin={isLogin}
            userData={userData}
          />
        </Route>
        <Route exact path={`/house/${userData.house_id}/chores`}>
          <ChoreList />
        </Route>
        <Route exact path="/" render={() => (
          isLogin ? (
            <Redirect to={`/house/${userData.house_id}`} />) : (
            <Home setCookie={setCookie}
              cookies={cookies} login={login}
              username={username}
              setUsername={setUsername}
              removeCookie={removeCookie} />)
        )} />
      </Switch>
    </div>
  )
}


export default App