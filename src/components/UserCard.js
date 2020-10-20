import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const UserCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{/* data.username */}</Card.Title>
        <Card.Text>
          User info
          {/* 
            user_id 
            full_name
            email
            events
            */}
        </Card.Text>
        <Button variant="primary">Create Potluck</Button>
        <Button variant="warning">Edit Potluck</Button>
      </Card.Body>
    </Card>
  );
};
