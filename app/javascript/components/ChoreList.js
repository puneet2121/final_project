import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChoreListItem from './ChoreListItem';

function ChoreList() {
  const [chores, setChores] = useState('');

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
    {/* <ChoreListItem></ChoreListItem> */}
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
      </table>
  </div>
  )
}

export default ChoreList