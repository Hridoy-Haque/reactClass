import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ReactBootstrap() {
  return (
    <Card style={{ width: "20rem" }} className="p-2 m-3">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et porro non
          autem sapiente quasi harum nisi voluptatibus, tempora culpa
          dignissimos.
        </p>
        <Button type="button">Learn more</Button>
      </Card.Body>
    </Card>
  );
}
