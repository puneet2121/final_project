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


function TextLinkExample(props) {
  const history = useHistory()
  const routeChange = () => {
    if (props.isLogin) {
      let path = `/house/${props.userData.house_id}`
      history.push(path);
    }
    history.push('/');
  }


  return (
    <div>
      <Nav className="navbar-brand-1">
        <NavLink className="navbar-brand-2" to="/" style={{ fontSize: '38px' }}>🆁🅸🅿🅿🅻🅴</NavLink>
        <Button className="bg-transparent" onClick={routeChange} style={{ outline: 'none', color: 'black', fontSize: '31px',marginLeft:'56rem',border:'none' }}>
          му нσυѕє
        </Button> </Nav>
    </div>
  );
}

export default TextLinkExample;