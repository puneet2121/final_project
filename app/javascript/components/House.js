import React from 'react'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import User from './House/User'
import Roommate from './House/Roommate'
import Generatetask from './House/Generatetask';
import Task from './House/Tasks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function House() {
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


  console.log('state', state.attributes)
  console.log('state roomates', state.roommates)
  const roommate = state.roommates
    .filter(item => { return (Number(item.relationships.house.data.id) === 1) })
    .map(item => {
      return (item?.attributes)
    })
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
          <Generatetask/>
          </Link>
          </Col>
          <Col><Task /></Col>
        </Row>
      </Container>


    </Fragment>
  )
}

export default House