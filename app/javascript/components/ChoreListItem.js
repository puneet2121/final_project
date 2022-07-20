import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import axios from 'axios';
import '../../assets/stylesheets/chores.css'


function ChoreListItem(props) {
  const [taskee, setTaskee] = useState(props.chore.user_id || null);
  const [occurence, setOccurence] = useState(props.chore.occurence || null)

  const occurences = ['Everyday', 'Every other day', 'Once a week'];

  console.log("occurences", occurences);
  console.log("occurence(state)", occurence)
  

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
  //  updateChore(newuserId, occurence)
   axios.put(`/api/v1/chore/${props.chore.id}`, {user_id: newuserId})
   .then((res) => {
    setTaskee(newuserId)
   })
  }

  const updateOccurence = event => {
    event.preventDefault()
    const newOccurence = event.target.value
    axios.put(`/api/v1/chore/${props.chore.id}`, {occurence: newOccurence})
   .then((res) => {
    setOccurence(newOccurence)
   })
  }

  // const updateChore = (userId, occurence) => {
  //   console.log('before')
  //   axios.put(`/api/v1/chore/${props.chore.id}`, { 
  //     user_id: userId,
  //     occurence: occurence
  //    })
  //     .then((res) => {
  //       console.log('after')
  //       setTaskee(userId)
  //       setOccurence(occurence);
  //     })
  // }



 
  return (

    <tr>
      <td>
        <p> {props.chore.chore_name}</p>
      </td>
      <td>
        <select
          multiple={false}
          value={taskee}
          onChange={updateTask}
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
          value={occurence}
          onChange={updateOccurence}
        >
          {
            occurences.map((occurence) => {
              return <option value={occurence}>{occurence}</option>
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