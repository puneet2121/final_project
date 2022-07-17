import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { useCookies } from "react-cookie";
export default function User(props) {
  console.log('props',props)
  const [cookies] = useCookies()
  return (
    <Card border="primary" style={{ width: '24rem', height: '27rem', border: '1px solid black', borderRadius: '15px!important'}} >
      <Card.Img variant="top" src={ props?.roommate?.image} style={{height:'14rem',width:'21rem', marginLeft:'5%'}}/>
    <Card.Header>{props?.roommate?.name}</Card.Header>
    <Card.Body>
      <Card.Title>{props.address.address}</Card.Title>
      <Card.Text>
        {props?.roommate?.bio}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}
