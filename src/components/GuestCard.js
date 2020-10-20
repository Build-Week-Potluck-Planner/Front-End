import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const GuestCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Potlocks To Attend</Card.Title>
        <Card.Text>Put the potluck info here</Card.Text>
        <Button variant="primary">Attend</Button>
        <Button variant="warning">Decline</Button>
      </Card.Body>
    </Card>
  );
};
