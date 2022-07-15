import React from 'react'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react';
import { Link, useHistory, Redirect, useParams } from 'react-router-dom';
import User from './House/User'
import Roommate from './House/Roommate'
import Generatetask from './House/Generatetask';
import Task from './House/Tasks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCookies } from "react-cookie";



function House(props) {
  // const [cookies, setCookie,removeCookie] = useCookies(["user"]);
  console.log(props.cookies,'this is a cookie')
  const [state, setState] = useState({
    attributes: {},
    roommates: [],
    user: {},
    house: []
  })
  const history = useHistory()

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
    axios.get(`http://localhost:3000/api/v1/users/${props.cookies.user.id}`)
      .then((result) => {
        setState(prev => ({
          ...prev,
          user: result.data.user,
          house: result.data.house
        }))
      })
  }, [])

  const roommate = state.house
    .filter(item => { 
      if(item.id !==props.cookies.user.id) {
        return item
      }
    })
  console.log({roommate})
  console.log(state.user, 'users consonmi')
  console.log(state.house)

  if (props.isLogin === false) {
    history.push('/')
  }

  return (
    <Fragment>
      <Container style={{ marginTop: '95px' }}>
        <Row>
          <Col><User roommate={state.user} address={state.attributes} /></Col>
          <Col><Roommate roommate={roommate} /></Col>
        </Row>
      </Container>
      <Container style={{ marginTop: '100px' }}>
        <Row>
          <Col>
            <Link to='/house/1/chores'>
              <Generatetask />
            </Link>
          </Col>
          <Col><Task /></Col>
        </Row>
      </Container>

      <button onClick={props.logout}>Logout</button>
    </Fragment>
  )
}

export default House