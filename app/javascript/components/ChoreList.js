import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChoreListItem from './ChoreListItem';

function ChoreList(props) {
  const [chores, setChores] = useState([]);
  const [roommates, setRoommates] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/houses/2')
    .then((res) => {
      console.log(res.data)
      setChores(res.data.chores)
      setRoommates(res.data.roommates)
    })
  }, [])

  const choreList = chores.map((chore) => {
    return (
      <ChoreListItem
      chore={chore}
      roommates={roommates}
      >

      </ChoreListItem>
    )
  })
  
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Chore</th>
      <th scope="col">Who's doing it</th>
      <th scope="col">Occurence</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
    <tbody> 
      {choreList}
    </tbody>
      </table>
    </div>  
  )
}

export default ChoreList