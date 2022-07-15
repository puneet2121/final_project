import Button from 'react-bootstrap/Button';
import React from "react";
function Task(props) {
  return (
    <>
      <div className="mb-2">
        <Button variant="primary" size="lg"onClick={props.viewTask}>
          View Task
        </Button>
      </div>
    </>
  );
}

export default Task;