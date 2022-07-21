import React from 'react'
import axios from 'axios'
import { useState, useEffect, Fragment } from 'react';
import { Link, useHistory, Redirect, useParams } from 'react-router-dom';
import User from './House/User'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCookies } from "react-cookie";
import Button from 'react-bootstrap/Button';
import "./style/House.scss";
import Card from 'react-bootstrap/Card';

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
    <h1 className="text-center" style={{color:'#2e30ac'}}> List of tasks for {state.user.name}</h1>
     <div style={{marginTop: '7rem'}}>
      
        {state.chores.map((roommate) => {
          return (
            
            <Card className="zoom" style={{ width: '55%', marginLeft: '18rem', background:"rgba(15 143 215 / 75%)",borderRadius:'18px', marginBottom:'4px' ,color:'#131be5'}}>
              <Card.Body>
                <Card.Title>◎&nbsp;&nbsp;{roommate?.chore_name} <div className="text-end" style={{color:'#77ff00'}}>{roommate?.occurence}</div> </Card.Title>
              </Card.Body>
            </Card>)

        })}
      </div>
    </>
  )
}

export default Viewtask
