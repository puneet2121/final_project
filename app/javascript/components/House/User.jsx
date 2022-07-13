import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
export default function User(props) {
  console.log('props',props)
  return (
    <Card border="primary" style={{ width: '28rem', height: '17rem' }}>
    <Card.Header><img style={{height:'auto',width:'10%',marginRight:'5%' }} src={ props?.roommate[0]?.image }/>{props?.roommate[0]?.name}</Card.Header>
    <Card.Body>
      <Card.Title>{props.address.address}</Card.Title>
      <Card.Title><img style={{height:'auto',width:'40%'}} src={ props.address.image }/></Card.Title>
      <Card.Text>
        {props?.roommate[0]?.bio}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}