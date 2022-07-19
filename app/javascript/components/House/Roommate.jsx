import React from "react";
import Card from 'react-bootstrap/Card';
import '../style/House.scss'
export default function Roommate(props) {
  return (
    <>

      {props.roommate.map((roommate) => {
        return (
          <Card border="primary" className='hover-overlay' style={{ width: '28rem' ,marginBottom:'10px',borderRadius: '21px',border: '2px solid black',marginRight:'15px'}}>
            <Card.Header><img style={{height:'auto',width:'10%',marginRight:'5%' }} src={ roommate?.image } />{roommate?.name}</Card.Header>
            <Card.Body>
              <Card.Title>{roommate?.bio}
              </Card.Title>
              
            </Card.Body>
          </Card>)
      })}
    </>
  )
}
