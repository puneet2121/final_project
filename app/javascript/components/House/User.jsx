import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { useCookies } from "react-cookie";
import '../style/House.scss'
import img from "../../src/images/Untitled-3 2.png"
export default function User(props) {
  const [cookies] = useCookies()
  return (
    <Card border="primary" className='hover-overlay' style={{width: '30rem', height: '44rem', border: '2px solid black', borderRadius: '21px' , marginLeft:'-18px'}} >
      <Card.Img variant="top" src={props?.roommate?.image} style={{ height: '15rem', width: '23rem', marginLeft: '12%', marginTop:'-21px'}} />
      <hr />
      <Card.Title className="text-center">{props?.roommate?.name}</Card.Title>
      <hr />
      <Card.Body>
        <Card.Title>{props.address.address}&nbsp;street</Card.Title>
        <Card.Img variant="top" src={ img} style={{height:'14rem',width:'21rem', marginLeft:'10%'}}/>
        <hr />
        <Card.Text>
          {props?.roommate?.bio}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
