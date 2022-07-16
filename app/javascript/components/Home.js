import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { Redirect, useParams } from 'react-router-dom'
import { useCookies } from "react-cookie";
import { useState, useEffect } from 'react';
function Home(props) {
  // const [cookies, setCookie] = useCookies(["user"]);
  const something = useParams()
  console.log(something, 'ffff')
  
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


  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control type="name" value={props.username} onChange={(event) => props.setUsername(event.target.value)} />
      </Form.Group>
      <Button variant="primary" type="button" onClick={props.login}>
        Submit
      </Button>
    </Form>
  )
}

export default Home