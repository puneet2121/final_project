import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

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
      roommates: [result.data.data]
    }))
})}, [])

  console.log('state', state.attributes)
  console.log('state roomates', state.roommates)
  return (
    <div>This is the house/1 page</div>
  )
}

export default House