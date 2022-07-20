import Button from 'react-bootstrap/Button';
import React from "react";

function Viewtask(props) {
  return (
    <>
      <div className="mb-2">
        <Button style={{ marginTop: '95px',width:'200px', height:'80px' ,marginLeft:'280px',backgroundColor:'dodgerblue'}} onClick={props.viewTask}>
          View Task 
        </Button>
      </div>
    </>
  );
}

export default Viewtask;