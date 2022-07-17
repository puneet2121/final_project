import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useHistory} from 'react-router-dom'
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
      <Navbar style={{ backgroundImage: `url('https://i.imgur.com/WgM609y.png')` }}>
        <Container>
          <NavLink className="navbar-brand" to="/" style={{fontSize:'25px'}}>Home</NavLink>
          <Nav className="navbar-brand">
            <Button className="btn bg-transparent border-0" onClick={routeChange} style={{ outline:'none', color:'black',fontSize:'25px',focus:'none'}}>
              My House
            </Button> </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TextLinkExample;