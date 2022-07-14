import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { Redirect,Link } from 'react-router-dom'
import { useCookies } from "react-cookie";
import { useState, useEffect, Fragment } from 'react';
function Home(props) {
  // const [cookies, setCookie] = useCookies(["user"]);
  const [state, setState] = useState({
    attributes: {},
    roommates: []
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
  }, [])
  const roommate = state.roommates
    .filter(item => { return (Number(item.relationships.house.data.id) === 1) })
    .map(item => {
      return (item?.attributes)
    })

  if (props.cookies.user) {
    return <Redirect to="/house/1" />
  }
  function handleCookie() {
    props.setCookie("user", roommate[0]?.name);
    
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control type="name" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleCookie}>
        Submit
      </Button>
    </Form>
  )
}

export default Home