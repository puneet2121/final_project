import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChoreListItem from './ChoreListItem';
import '../../assets/stylesheets/chores.css'

function ChoreList(props) {
  const [chores, setChores] = useState([]);
  const [roommates, setRoommates] = useState([]);
  const [userId, setUserId] = useState();
  const [addTask, setAddTask] = useState({
    chore_name: ''
  });


  useEffect(() => {

    axios.get('http://localhost:3000/api/v1/houses/1')
      .then((res) => {
        setRoommates(res.data.roommates)
      })
  }, [])

  useEffect(() => {

    axios.get('http://localhost:3000/api/v1/chore')
      .then((res) => {
        setChores(res.data)

      })
  }, [])

  const removeChore = (choreId) => {
    const currentChores = chores.filter( chore => chore.id === choreId? false: true)
    setChores(currentChores);
  }


  const submitTask = event => {
    event.preventDefault()

    const newTask = {
      chore_name: addTask.chore_name,

    }

    const house_id = 1
    const chore_name = newTask.chore_name

    const newChores = [...chores, newTask]


    axios.post('http://localhost:3000/api/v1/chore', { chore_name, house_id, user_id: 1})
      .then((res) => {


      })

    setChores(newChores)

  }

  const handleForm = (event) => {
    event.preventDefault();
    let taskName = event.target.value

    const newData = { ...addTask };
    newData['chore_name'] = taskName;

    setAddTask(newData)
  }
  const choreList = chores.map((chore) => {
    return (
      <ChoreListItem
        chore={chore}
        roommates={roommates}
        setUserId={setUserId}
        userId={userId}
        removeChore={removeChore}
      >

      </ChoreListItem>
    )
  })
  return (
    <div>
      <table className='chore-table'>
        <thead className="table-header">
          <tr>
            <th scope="col">Chore</th>
            <th scope="col">Who's doing it</th>
            <th scope="col">Occurence</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {choreList}
        </tbody>
      </table>
      <div className='add-chore-box'>
        <h2 className="Add-chore-title">Add a chore</h2>
        <form onSubmit={submitTask} className="input-box">
          <input type='text' onChange={handleForm} name="chore_name" required="required" placeholder="Add task"></input>
          <button type="submit" onSubmit={submitTask} className="add-button">Add</button>
        </form>
      </div>
    </div>
  )
}

export default ChoreList