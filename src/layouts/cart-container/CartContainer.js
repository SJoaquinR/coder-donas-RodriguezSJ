import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Cart from "../../components/cart/Cart";
import { CartContext } from "../../components/context/CartContext";
import FinishPurchase from "../../components/purchase/FinishPurchase";

const CartContainer = () => {
  const { items, clear, calculateTotal } = useContext(CartContext);

  const handleClearItem = () => {
    clear();
  };

  return (
    <>
      <h1>Carrito de compras</h1>
      {items.length > 0 ? (
        <>
          {" "}
          <Cart items={items} />
          <strong>Precio Total: ${calculateTotal()} </strong>
          <Card.Text>
            
            <FinishPurchase />
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
