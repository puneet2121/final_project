import React from "react";
import Card from 'react-bootstrap/Card';
export default function User(props) {
  console.log('props',props)
  return (
    <Card border="primary" style={{ width: '28rem', height: '10rem' }}>
    <Card.Header>{props?.roommate[0]?.name}</Card.Header>
    <Card.Body>
      <Card.Title>{props.address}</Card.Title>
      <Card.Text>
        {props?.roommate[0]?.bio}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}