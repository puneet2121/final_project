import React from "react";
import Card from 'react-bootstrap/Card';
export default function Roommate(props) {
  console.log('props', props)
  return (
    <><Card border="primary" style={{ width: '28rem' }}>
      <Card.Header>Roomates</Card.Header>
      <Card.Body>
        <Card.Title>{props?.roommate[1]?.name}
        </Card.Title>
        <Card.Text>
          {props?.roommate[1]?.bio}
        </Card.Text>
      </Card.Body>
    </Card><Card border="primary" style={{ width: '28rem' }}>
        <Card.Header>Roomates</Card.Header>
        <Card.Body>
          <Card.Title>{props?.roommate[2]?.name}
          </Card.Title>
          <Card.Text>
            {props?.roommate[2]?.bio}
          </Card.Text>
        </Card.Body>
      </Card>
      </>
  )
}