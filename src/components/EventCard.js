import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const EventCard = ({ props }) => {
  console.log(props);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> {props.event_name} </Card.Title>
        <Card.Text>
          <p>{props.description}</p>
          <p>{props.event_id}</p>
          <p>{props.date}</p>
          <p>{props.time}</p>
          <p>
            {props.state}
            {props.address}
          </p>
        </Card.Text>
        <Button variant="Primary">Edit</Button>
        <Button variant="Warning">Delete</Button>
      </Card.Body>
    </Card>
  );
};
