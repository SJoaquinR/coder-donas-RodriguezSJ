import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Link, useLocation, useHistory } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "../ItemCount";

const ItemDetail = ({
  id,
  product,
  price,
  pictureUrl,
  stock,
  quantity,
  setQuantity,
}) => {
  const location = useLocation();
  const { goBack, push } = useHistory();
  const { addItem, removeItem, isInCart } = useContext(CartContext);

  const styles = {
    btnAddItem: isInCart(id) ? "btn btn-danger m-2" : "btn btn-success m-2",
    btnFinishBuyer: `btn btn-success ${!isInCart(id) && "disabled"}`,
  };

  const handleAddItem = () => {
    const item = {
      id,
      product,
      price,
      pictureUrl,
      stock,
    };
    addItem({ item, quantity });
  };

  let priceTotalItem = price * quantity;

  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <>
      <div className="col-md-4">
        <div className="mb-4">
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
                <strong>Producto:</strong> {product}
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
                    <strong>
                      Total:{" "}
                      <NumberFormat
                        displayType="text"
                        prefix="$"
                        thousandSeparator={true}
                        value={priceTotalItem}
                      />
                    </strong>
                  </Card.Text>
                </>
              )}
              <>
                {location.pathname === "/cart" ? null : (
                  <>
                    {isInCart(id) !== true ? (
                      <>
                        <Card.Text>
                          <ItemCount
                            stock={stock}
                            quantity={quantity}
                            setQuantity={setQuantity}
                          />
                        </Card.Text>

                        {quantity > 0 && (
                          <>
                            <Card.Text>
                              <Button
                                variant={styles.btnAddItem}
                                //variant="primary m-2"
                                onClick={handleAddItem}
                                disabled={quantity === 0}
                              >
                                Añadir al Carrito
                              </Button>
                            </Card.Text>
                          </>
                        )}
                      </>
                    ) : (
                      <Card.Text>
                        <Link to="/cart">
                          <Button variant="secondary">Ir al Carrito</Button>
                        </Link>
                      </Card.Text>
                    )}
                  </>
                )}
              </>

              {location.pathname !== "/cart" ? null : (
                <Card.Text>
                  <Button variant="primary" onClick={handleRemoveItem}>
                    Eliminar del Carrito
                  </Button>
                </Card.Text>
              )}

              {location.pathname === "/cart" ? null : (
                <>
                  <hr />
                  <Card.Text>
                    <Button
                      variant="btn btn-primary mx-2"
                      onClick={() => goBack()}
                    >
                      Volver
                    </Button>
                    <Button
                      variant="btn btn-outline-primary mx-2"
                      onClick={() => push("/Home")}
                    >
                      Volver al Catalogo
                    </Button>
                  </Card.Text>
                </>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
