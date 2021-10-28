import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

const ItemDetail = ({
  id,
  producto,
  price,
  pictureUrl,
  stock,
  quantity,
  setQuantity,
}) => {
  return (
    <>
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
          <Card.Text>
            <ItemCount
              stock={stock}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </Card.Text>
          <Card.Text>
            {quantity > 0 && (
              <Link to="/cart">
                <Button variant="primary">Añadir al Carrito</Button>
              </Link>
            )}
          </Card.Text>

          <Link to={`/`}>
            <Button variant="primary">Volver</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
