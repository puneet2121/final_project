import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import axios from 'axios';
import '../../assets/stylesheets/chores.css'


function ChoreListItem(props) {
  const [taskee, setTaskee] = useState(props.chore.user_id || null);
  // const [chores, setChores] = useState([])


  const [values, setValues] = useState([])

  const val = ['Everyday', 'Every other day', 'Once a week'];


  

  const deleteTask = function (id) {
    const choreId = props.chore.id
    const object = props.chore

    axios.delete(`http://localhost:3000/api/v1/chore/${choreId}`, { data: object })
      .then((result) => {
      props.removeChore(choreId)
      })
  }
  const updateTask = event => {
    event.preventDefault()
   const newuserId = event.target.value
    axios.put(`http://localhost:3000/api/v1/chore/${props.chore.id}`, { user_id:newuserId })
      .then((res) => {
        setTaskee(newuserId)
      })
  }



 
  return (

    <tr>
      <td>
        <p> {props.chore.chore_name}</p>
      </td>
      <td>
        <select
          multiple={false}
          value={taskee}
          onChange={ updateTask}
        >
          {
            props.roommates.map((roommate) => {
              return <option value={roommate.id}>{roommate.name}</option>
            })
          }
        </select>
      </td>
      <td>
        <select
          multiple={false}
          value={values}
          onChange={(event) => setValues(event.target.value)}
        >
          {
            val.map((value) => {
              return <option value={value}>{value}</option>
            })
          }
        </select>
      </td>
      <td>

        <button type="submit" onClick={deleteTask} className='delete-button'>Delete</button>
      </td>
    </tr>

  )
}

export default ChoreListItem