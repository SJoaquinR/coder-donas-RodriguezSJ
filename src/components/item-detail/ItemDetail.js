import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
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
  const location = useLocation();
  const { addItem, removeItem } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddItem = () => {
    const item = {
      id,
      producto,
      price,
      pictureUrl,
      stock,
    };
    addItem({ item, quantity });
    setIsAdded(true);
  };

  let priceTotalItem = price * quantity;

  const handleRemoveItem = () => {
    removeItem(id);
  };

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
          {location.pathname !== "/cart" ? (
            <Card.Text>
              <strong>Stock disponible: </strong> {stock}
            </Card.Text>
          ) : (
            <>
              <Card.Text>
                <strong>Cantidad seleccionada: {quantity} </strong>
              </Card.Text>
              <Card.Text>
                <strong>Total: ${priceTotalItem}</strong>
              </Card.Text>
            </>
          )}

          {isAdded !== true ? (
            <Card.Text>
              {location.pathname === "/cart" ? null : (
                <>
                  <ItemCount
                    stock={stock}
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                  {quantity > 0 && (
                    <Button variant="primary" onClick={handleAddItem}>
                      Añadir al Carrito
                    </Button>
                  )}
                </>
              )}
            </Card.Text>
          ) : (
            <>
              {quantity > 0 && (
                <Card.Text>
                  <Link to="/cart">
                    <Button variant="success">Ir al Carrito</Button>
                  </Link>
                </Card.Text>
              )}
            </>
          )}

          {location.pathname !== "/cart" ? null : (
            <Card.Text>
              <Button variant="primary" onClick={handleRemoveItem}>
                Eliminar del Carrito
              </Button>
            </Card.Text>
          )}
          {location.pathname === "/cart" ? null : (
            <Card.Text>
              <Link to={`/`}>
                <Button variant="primary">Volver</Button>
              </Link>
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
