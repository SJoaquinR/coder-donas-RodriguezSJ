import React from "react";
import { Button, Card } from "react-bootstrap";

const ItemDetail = ({ id, producto, price, pictureUrl, stock }) => {
  const handleBackItemClick = () => {
    console.log(`Presiono el boton volver`);
  };

  return (
    <div>
      <Card className="Card-style">
        <Card.Body>
          <img
            src={pictureUrl}
            style={{ width: "200px" }}
            className="border border-dark rounded"
            alt=""
          />
          <Card.Text>
            <strong>ID:</strong> {id}
          </Card.Text>
          <Card.Text>
            <strong>Producto:</strong> {producto}
          </Card.Text>
          <Card.Text>
            <strong>Precio:</strong> ${price}
          </Card.Text>
          <Card.Text>
            <strong>Stock disponible: </strong> {stock}
          </Card.Text>
          <Button variant="primary" onClick={handleBackItemClick}>
            Volver
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
