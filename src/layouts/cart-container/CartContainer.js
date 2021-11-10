import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import NumberFormat from "react-number-format";
import Cart from "../../components/cart/Cart";
import { CartContext } from "../../components/context/CartContext";
import { getFirestore } from "../../firebase";

const CartContainer = () => {
  const { items, clear, calculateTotal } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleClearItem = () => {
    clear();
  };

  const handleFinishPurchase = () => {
    const newItems = items.map(({ item, quantity }) => ({
      item: {
        id: item.id,
        product: item.product,
        price: item.price,
      },
      quantity,
    }));

    const newOrder = {
      buyer: {
        name: "Santiago",
        phone: "123456789",
        email: "san@san.com.ar",
      },
      items: newItems,
      total: calculateTotal(),
    };

    const db = getFirestore(); //llamo a la base de datos
    const orders = db.collection("orders"); //llamo a la coleccion de ordenes
    //Puedo usar el metodo batch para crear una orden en la base de datos
    const batch = db.batch();

    //Usamos add para agregar una orden (podes agregar una coleccion o un documento entre otros)
    orders
      .add(newOrder)
      .then((response) => {
        items.forEach(({ item, quantity }) => {
          const docRef = db.collection("products").doc(item.id);
          batch.update(docRef, { stock: item.stock - quantity });
        });
        batch.commit();
        setOrderId(response.id);
      })
      .catch((error) => console.log("error: ", error));
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
            {/* <Button onClick={handleFinishPurchase} variant="primary">
              Finalizar Compra
            </Button> */}
            <>
            {orderId && <h3>Tu orden con el id: ${orderId} ha sido creado</h3>}
            </>
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
