import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie"; 
import axios from 'axios';
import '../../assets/stylesheets/chores.css'


function ChoreListItem(props) {
  const [taskee, setTaskee] = useState(props.chore.user_id || null);
  const [chores, setChores] = useState([])


  const [values, setValues] = useState(['Everyday', 'Every other day', 'Once a week'])

  useEffect(() => {
    
    axios.get('http://localhost:3000/api/v1/houses/1')
    .then((res) => {
      setChores(res.data.chores)
    })
  }, [])


  
  const deleteTask = function(id) {
     const data = props.chore.id
     const object = props.chore

    axios.delete(`http://localhost:3000/api/v1/chore/${data}`, {data: object})
    .then((result) => {
      axios.get('http://localhost:3000/api/v1/houses/1')
      .then((res) => {
        setChores(res.data.chores)
      })
    })
  }



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
  onChange={(event) => setTaskee(event.target.value)}
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
  value={values}
  >
    {
      values.map((value) => {
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