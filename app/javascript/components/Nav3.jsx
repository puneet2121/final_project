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
import Nav1 from "./Nav1";
import TextLinkExample from "./Nav";

function Nav3(props) {

  return (
      <Navbar style={{ backgroundImage: `url('https://i.imgur.com/WgM609y.png')` }}>
        <Container>

          {props.isLogin ? (
            <Nav1 logout={props.logout}/>
            
          ) : (
            <TextLinkExample />
            
          )}
        </Container>
      </Navbar>
  );
}

export default Nav3;