import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useHistory } from 'react-router-dom'
import Home from './Home'
import House from './House'
import App from "./App";
import Button from 'react-bootstrap/Button';
import "./style/House.scss";


function Nav1(props) {

  return (
    <div>
      <Nav className="navbar-brand-1">
      <NavLink className="navbar-brand-2" to="/" style={{fontSize:'35px'}}>🆁🅸🅿🅿🅻🅴</NavLink>
      <Button className="bg-transparent" onClick={props.logout} style={{ outline:'none', color:'black',fontSize:'31px',marginLeft:'58rem',border:'none'}}>Logout</Button>
     </Nav>
    </div>
  );
}

export default Nav1;