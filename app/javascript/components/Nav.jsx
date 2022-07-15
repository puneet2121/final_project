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
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <Nav className="navbar-brand">
            <Button className="btn bg-transparent border-0" onClick={routeChange} style={{ outline:'none' }}>
              My House
            </Button> </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TextLinkExample;