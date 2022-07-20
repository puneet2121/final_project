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
import Button from 'react-bootstrap/Button';
import "./style/House.scss";


function House(props) {
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
      if (item.id !== props.cookies.user.id) {
        return item
      }
    })
  const routeChange = () => {
    let path = `/house/${props.userData.house_id}/chores`;
    history.push(path);
  }
  const viewTask = () => {
    let path=`/house/chores/viewtasks/${props.userData.id}`
    history.push(path);
  }

  return (
    <div>
      <div className='name'>
        <Container style={{ marginTop: '95px' }}>
          <Row>
            <Col><User roommate={state.user} address={state.attributes} /></Col>
            <Col><Roommate roommate={roommate} /></Col>
          </Row>
        </Container>
      </div>
      <Container style={{ marginTop: '-100px'  }}>
        <Row style = {{marginLeft:'35px'}}>
          <Col>
            <Button style={{ marginTop: '95px',width:'200px', height:'80px',marginLeft:'70px',backgroundColor:'dodgerblue' }} onClick={routeChange}>
              Generate Task
            </Button>
          </Col>
          <Col>
            <Task viewTask={viewTask} /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default House