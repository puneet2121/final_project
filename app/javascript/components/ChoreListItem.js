import React from 'react'

function ChoreListItem(props) {




  return (
    <tbody>
    <tr>
      <th scope="row">1</th>
      <input type="text" name='chore' placeholder="Task"/>
      <td>
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Dropdown button
      </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
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
        <button>Submit</button>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  </tbody>
  )
}

export default ChoreListItem