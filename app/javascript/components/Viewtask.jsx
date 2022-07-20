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
import Card from 'react-bootstrap/Card';
import './style/House.scss'

function Viewtask(props) {
  const [state, setState] = useState({
    attributes: {},
    roommates: [],
    user: {},
    house: [],
    chores: []
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
        console.log(result, "line 43")
        setState(prev => ({
          ...prev,
          user: result.data.user,
          house: result.data.house,
          chores: result.data.chores
        }))
      })
  }, [])

  const roommate = state.chores.map(item => {
    return (item?.chore_name)

  })
  console.log(roommate)
  return (
    <>
      <div style={{marginTop: '10rem'}}>
        {state.chores.map((roommate) => {
          return (

            <Card style={{ width: '50%', marginLeft: '20rem' }}>
              <Card.Body>
                <Card.Title>⚫{roommate?.chore_name} <div className="text-end">{roommate?.occurence}</div> </Card.Title>
              </Card.Body>
            </Card>)

        })}
      </div>
    </>
  )
}

export default Viewtask
