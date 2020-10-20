import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const OrganizerCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>NAME OF POTLUCK EVENT</Card.Title>
        <Card.Text>Put the potluck info here</Card.Text>
        <Button variant="primary">Edit</Button>
        <Button variant="warning">Delete</Button>
      </Card.Body>
    </Card>
  );
};
