import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import NumberFormat from "react-number-format";
import Cart from "../../components/cart/Cart";
import { CartContext } from "../../components/context/CartContext";

const CartContainer = () => {
  const { items, clearCart, calculateTotal } = useContext(CartContext);

  const handleClearItem = () => {
    clearCart();
  };

  return (
    <>
      <h1>Carrito de compras</h1>
      {items.length > 0 ? (
        <>
          <Cart items={items} />
          <strong>
            Precio Total:{" "}
            <NumberFormat
              displayType="text"
              prefix="$"
              thousandSeparator={true}
              value={calculateTotal()}
            />
          </strong>
          <Card.Text>
          <Link to="/checkout" className="btn btn-success mx-3">Comprar productos</Link>
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button
              variant="outline-danger"
              onClick={handleClearItem}
              className="mt-3"
            >
              Vaciar carrito
            </Button>
            <Link to={`/`}>
              <Button variant="outline-success" className="mt-3">
                Seguir comprando
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h3 className="mt-3">No hay productos en el carrito</h3>
          <Link to={`/`}>
            <Button variant="outline-success" className="mt-3">
              Ir al catalogo
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

export default CartContainer;
