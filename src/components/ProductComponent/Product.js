import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardSubtitle, CardBody, CardTitle, CardText } from "reactstrap";
import "./Product.css";

export default function Product({ product, fillForm }) {
  return (
    <Card className="card" onClick={() => fillForm(product)}>
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {product.price}$
        </CardSubtitle>
      </CardBody>
      <div className="imageContainer">
        <img alt={product.name} src={product.imageUrl} />
      </div>
      <CardBody>
        <CardText>{product.description}</CardText>
      </CardBody>
    </Card>
  );
}
