import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import Home from './Home'


function TextLinkExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
         <Navbar.Brand>
            <Link to={Home}>Home</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default TextLinkExample;