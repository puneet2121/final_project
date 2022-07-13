import React from 'react'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react';
import User from './User'
import Roomate from './Roomate'
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
})}, [])

  
  console.log('state', state.attributes)
  console.log('state roomates', state.roommates)
  const roommate = state.roommates
  .filter(item => { return (Number(item.relationships.house.data.id) === 1)})
  .map( item => {
    console.log(item)
    return (item?.attributes)
  })
  return (
    <Fragment>
    <div >This is the house/1 page {state.attributes.address} {roommate.name}
    </div>
    <Container>
      <Row>
        <Col><User roommate={roommate} address={state.attributes.address}/></Col>
        <Col><Roomate roommate={roommate}/></Col>
      </Row>
      </Container>
    
    
    </Fragment>
  )
}

export default House