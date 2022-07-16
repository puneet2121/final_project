import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie"; 
import axios from 'axios';

function ChoreListItem(props) {
  const [taskee, setTaskee] = useState(props.chore.user_id || null);
  const [chores, setChores] = useState([])

  useEffect(() => {
    
    axios.get('http://localhost:3000/api/v1/houses/1')
    .then((res) => {
      setChores(res.data.chores)
    })
  }, [])


  
  const deleteTask = function(id) {
     const data = props.chore.id
     const object = props.chore
     console.log('chores', data)
    // const deleteId = props.chore.id;

    axios.delete(`http://localhost:3000/api/v1/chore/${data}`, {data: object})
    .then((result) => console.log('result', result))
  

    const newChores = [...chores]  
    const index = newChores.indexOf(data +5)
    
    console.log('index', index)
    newChores.pop()
    setChores(newChores);
  
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
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" >Action</a>
    <a className="dropdown-item" >Another action</a>
    <a className="dropdown-item" >Something else here</a>
  </div>
      </td>
      <td>
        <span className = "label label-success">Success Label</span>
      </td>
      <td>
        {/* <button onClick={postChore}>Submit</button> */}
        <button>Submit</button>
        <button>Edit</button>
        <button type="button" onClick={deleteTask}>Delete</button>
      </td>
    </tr>

  )
}

export default ChoreListItem