import React from "react";
import { Card, Button, CardImg } from "react-bootstrap";

const CardProduct = (props) => {
  let { imgSrc } = props.data;
  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" src={imgSrc} />
        <Button className="w-100 rounded-0" variant="success">
          Add To Card
        </Button>
      </div>
    </Card>
  );
};

export default CardProduct;
