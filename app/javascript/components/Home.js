import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom'
import { useCookies } from "react-cookie";
import { useState, useEffect } from 'react';
function Home(props) {
  // const [cookies, setCookie] = useCookies(["user"]);
  const [username, setUsername] = useState('')
  const [state, setState] = useState({
    attributes: {},
    roommates: [],
    user: {},
    house: []
  })


  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/houses')
      .then((result) => {
        setState(prev => ({
          ...prev,
          attributes: result.data.data[0].attributes
        }))
      })
    axios.get('http://localhost:3000/api/v1/users')
      .then((result) => {
        setState(prev => ({
          ...prev,
          roommates: result.data.data
        }))
      })
    axios.get('http://localhost:3000/api/v1/users/1')
      .then((result) => {
        setState(prev => ({
          ...prev,
          user: result.data.user,
          house: result.data.house
        }))
      })

  }, [])
  // const authUser = state.house
  //   .map(item => {
  //     return (item?.attributes)
  //   })
  function handleCookie() {
    props.setCookie("user", username);

  }
  if (props.cookies.user === 'Ali Bouran') {
    return <Redirect to="/house/1" />
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control type="name" value={username} onChange={(event) => setUsername(event.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleCookie}>
        Submit
      </Button>
    </Form>
  )
}

export default Home