import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChoreListItem from './ChoreListItem';

function ChoreList(props) {
  const [chores, setChores] = useState([]);
  const [roommates, setRoommates] = useState([]);
  const [addTask, setAddTask] = useState({
    chore_name: ''
  });

  useEffect(() => {
    
    axios.get('http://localhost:3000/api/v1/houses/1')
    .then((res) => {
      setChores(res.data.chores)
      setRoommates(res.data.roommates)
    })
  }, [])

  const submitTask = event => {
    event.preventDefault()
    const newTask = {
      chore_name: addTask.chore_name,
      house_id: 1
    }

    const newChores = [...chores, newTask]

   
    axios.post('http://localhost:3000/api/v1/chore', newTask).then((res) => console.log(res))
    
    setChores(newChores)
  
  }

  const handleForm = (event) => {
    event.preventDefault();
    let taskName = event.target.value

    const newData = {...addTask};
    newData['chore_name'] = taskName;

    setAddTask(newData)
  }
    
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
      <h2>Add a chore</h2>
      <form onSubmit={submitTask}>
        <input type='text' onChange={handleForm} name="chore_name" required="required" placeholder="Add task"></input>
        <button type="submit" onSubmit={submitTask}>Add</button>
      </form>

    </div>  
  )
}

export default ChoreList