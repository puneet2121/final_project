import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie"; 
import axios from 'axios';

function ChoreListItem(props) {
  const [taskee, setTaskee] = useState(props.chore.user_id || null);
  const [chores, setChores] = useState([])
  console.log('props here: ', props)

  useEffect(() => {
    
    axios.get('http://localhost:3000/api/v1/houses/1')
    .then((res) => {
      setChores(res.data.chores)
    })
  }, [])
  
  const deleteTask = function(id) {
    const idToDelete = undefined;
    axios.delete(`http://localhost:3000/api/v1/chore/${idToDelete}`)
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
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" >Action</a>
    <a class="dropdown-item" >Another action</a>
    <a class="dropdown-item" >Something else here</a>
  </div>
      </td>
      <td>
        <span class = "label label-success">Success Label</span>
      </td>
      <td>
        {/* <button onClick={postChore}>Submit</button> */}
        <button>Submit</button>
        <button>Edit</button>
        <button type="submit" onClick={deleteTask}>Delete</button>
      </td>
    </tr>

  )
}

export default ChoreListItem