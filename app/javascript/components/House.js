import React from 'react'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
  const [state, setState] = useState({
    attributes: {},
    roommates: []
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
  }, [])



  console.log('state', state.attributes)
  console.log('state roomates', state.roommates)
  const roommate = state.roommates
    .filter(item => { return (Number(item.relationships.house.data.id) === 1) })
    .map(item => {
      console.log(item,'ITEM484848')
      return (item?.attributes)
    })


  function click() {
    props.removeCookie("user");
    history.push('/')
  }

  return (
    <Fragment>
      <Container style={{ marginTop: '95px' }}>
        <Row>
          <Col><User roommate={roommate} address={state.attributes} /></Col>
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

      <button onClick={click}>Logout</button>
    </Fragment>
  )
}

export default House