import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { useCookies } from "react-cookie";
export default function User(props) {
  console.log('props', props)
  const [cookies] = useCookies()
  return (
    <Card border="primary" style={{ width: '30rem', height: '44rem', border: '2px solid black', borderRadius: '21px' , marginLeft:'-18px'}} >
      <Card.Img variant="top" src={props?.roommate?.image} style={{ height: '15rem', width: '23rem', marginLeft: '12%', marginTop:'-21px'}} />
      <hr />
      <Card.Title style={{alignText:'center'}}>My Profile <br />{props?.roommate?.name}</Card.Title>
      <Card.Body>
        <Card.Title>{props.address.address}</Card.Title>
        <Card.Img variant="top" src={ props.address.image} style={{height:'14rem',width:'21rem', marginLeft:'10%'}}/>
        <Card.Text>
          {props?.roommate?.bio}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
