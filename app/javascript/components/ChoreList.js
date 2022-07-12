import React from 'react';
import { Link } from 'react-router-dom';

function ChoreList() {
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <input type="chore" placeholder="Task"/>
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
    </tr>
  </tbody>
      </table>
  </div>
  )
}

export default ChoreList