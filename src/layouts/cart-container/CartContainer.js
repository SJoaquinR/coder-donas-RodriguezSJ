import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Cart from "../../components/cart/Cart";
import { CartContext } from "../../components/context/CartContext";

const CartContainer = () => {
  const { items, clear } = useContext(CartContext);

  const handleClearItem = () => {
    clear();
  };

  return (
    <>
      <h1>Carrito de compras</h1>
      {items.length > 0 ? (
        <>
          <Cart items={items} />
          <Card.Text>
            <Button variant="primary" onClick={handleClearItem}>
              Vaciar Carrito
            </Button>
          </Card.Text>
        </>
      ) : (
        <h3>Tu carrito esta vacio</h3>
      )}
      <Card.Text>
        <Link to={`/`}>
          <Button variant="primary">Volver</Button>
        </Link>
      </Card.Text>
    </>
  );
};

export default CartContainer;
