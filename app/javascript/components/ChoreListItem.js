import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import axios from 'axios';
import '../../assets/stylesheets/chores.css'


function ChoreListItem(props) {
  const [taskee, setTaskee] = useState(props.chore.user_id || null);
  // const [chores, setChores] = useState([])


  const [values, setValues] = useState([])

  const val = ['Everyday', 'Every other day', 'Once a week'];

<<<<<<< HEAD
  useEffect(() => {
    
    axios.get('http://localhost:3000/api/v1/houses/1')
    .then((res) => {
      // setChores(res.data.chores)
    })
  }, [])
=======
  // useEffect(() => {

  //   axios.get('http://localhost:3000/api/v1/houses/1')
  //     .then((res) => {
  //       setChores(res.data.chores)
  //     })
  //     props.setUserId(taskee);
  //     console.log(taskee)
  // }, [taskee])
>>>>>>> 48f137ed26ed46b83192da0a3f3891493d1e45e6


  

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
        console.log('line 46 res val',res)
        // debugger
        setTaskee(newuserId)
        console.log(newuserId)
      })
  }

  console.log('state outside function props:',props.chore)


 
  return (

    <tr>
      <td>
        {props.chore.id}
      </td>
      <td>
        <p> {props.chore.chore_name}</p>
      </td>
      <td>
        <select
          value={taskee}
          onChange={ updateTask}
        >
          {
            props.roommates.map((roommate) => {
              // props.setUserId(roommate.id);
              return <option value={roommate.id}>{roommate.name}</option>
            })
          }
        </select>
      </td>
      <td>
        <select
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