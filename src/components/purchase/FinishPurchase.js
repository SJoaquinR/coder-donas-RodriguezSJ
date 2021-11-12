import { useContext, useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
//import { Redirect } from "react-router";
import { getFirestore } from "../../firebase";
import { CartContext } from "../context/CartContext";
import Loader from "../../components/loader/Loader";
import "./FinishPurchase.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const FinishPurchase = () => {
  const { items, clearCart, calculateTotal } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [validated, setValidated] = useState(false);
  const { goBack } = useHistory();

  const [buyes, setBuyes] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setBuyes({
      ...buyes,
      [e.target.name]: e.target.value,
    });
  };

  const { name, surname, email, phone } = buyes;

  const clearForm = () => {
    setBuyes({
      name: "",
      surname: "",
      email: "",
      phone: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);

      return;
    }

    setLoading(true);

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
        name: name,
        surname: surname,
        phone: phone,
        email: email,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
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
        clearCart();
        clearForm();
      })
      .catch((error) => console.log("error: ", error))
      .finally(() => {
        setValidated(false);
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="testbox">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <legend>Complete sus datos para confirmar la compra</legend>

          <Row className="mb-3">
            <div className="columns">
              <Form.Group
                md="4"
                controlId="validationCustom01"
                className="item"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={name}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese Nombre.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                md="4"
                controlId="validationCustom02"
                className="item"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Apellido"
                  name="surname"
                  value={surname}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese Apellido.
                </Form.Control.Feedback>
              </Form.Group>{" "}
            </div>
          </Row>
          <Row className="mb-3">
            <div className="columns">
              <Form.Group
                md="4"
                controlId="validationCustomEmail"
                className="item"
              >
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="E-mail"
                  aria-describedby="inputGroupPrepend"
                  required
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese un Correo electronico.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                md="4"
                controlId="validationCustomPhone"
                className="item"
              >
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="phone"
                  placeholder="Telefono"
                  value={phone}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese numero de Telefono.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </Row>
          {!orderId ? (
            <>
              <Button
                variant="btn btn-secondary mx-2 btn-block"
                onClick={() => goBack()}
              >
                Volver
              </Button>
              <Button type="submit" className="btn-block">
                Comprar
              </Button>
            </>
          ) : (
            <>
              <h4>Tu orden con el id: ${orderId} ha sido creado</h4>
              <Link to={`/`}>
                <Button variant="outline-success" className="mt-3">
                  Ir al catalogo
                </Button>
              </Link>
            </>
          )}
        </Form>
      </div>
    </>
  );
};

export default FinishPurchase;
