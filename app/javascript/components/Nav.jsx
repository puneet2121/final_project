import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'
import Home from './Home'
import House from './House'


function TextLinkExample() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <NavLink className="navbar-brand" to="/house/1">My House</NavLink>
        </Container>
      </Navbar>
    </div>
  );
}

export default TextLinkExample;