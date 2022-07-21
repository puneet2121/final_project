import React from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { Redirect, useParams } from 'react-router-dom'
import { useCookies } from "react-cookie";
import { useState, useEffect } from 'react';
import '../../assets/stylesheets/chores.css';
import img from '../src/images/Untitled-3 2.png';
import "./style/House.scss";
import Card from 'react-bootstrap/Card';
function Home(props) {
  const something = useParams()

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
    <>

      <img src={img} className='popup2' />
      <h1 className="roommate" style={{ marginLeft: '338px', fontWeight: 'bold', width: '45%' }}>A roommate management system.</h1>
      <Card style={{ width: '30rem',height:'24rem' ,marginTop: "172px", marginLeft: '200px',background: 'rgba(101 148 210 / 81%)'  }}>
        <Form style={{ marginLeft: '90px' }}>
          <h1 className='popup'>Welcome to Ripple</h1>
          <div className='main-thing'>

          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ marginTop: "27px", width: '70%', marginLeft: '-75px' }}>
            <Form.Label className="mb-3" style={{ fontSize: "30px" }} >Login</Form.Label>
            <Form.Control type="name" value={props.username} onChange={(event) => props.setUsername(event.target.value)} />
          </Form.Group>
          <Button style={{ marginLeft: '-77px' }} className="mb-3" variant="primary" type="button" onClick={props.login}>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  )
}

export default Home
