import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Spinner } from "react-bootstrap";
// import { products } from "../../data/products";
// import { mook } from "../../helpers/mook";
import ItemDetail from "../../components/item-detail/ItemDetail";
import { getFirestore } from "../../firebase";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [quantity, setQuantity] = useState(0);

  // const [isFinished, setIsFinished] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [messageContext, setMessageContext] = useState("");

  // useEffect(() => {
  //   if (isTrue) {
  //     setMessageContext(`Context recibido: ${isTrue}`)
  //   }
  // },[isTrue]);

  // useEffect(() => {
  //   if (itemId) {
  //     mook(
  //       products,
  //       itemId,
  //       setMessage,
  //       setIsSuccess,
  //       setIsLoading,
  //       setIsFinished,
  //       setItem
  //     );
  //   }
  // }, [itemId]);

  useEffect(() => {
    if (itemId) {
      const db = getFirestore();
      const itemCollection = db.collection("products");

      const currentItem = itemCollection.doc(itemId);

      currentItem
        .get()
        .then((document) => {
          if (!document.exists) {
            setMessage("No se encontro el producto seleccionado");
            return;
          }
          setItem({ id: document.id, ...document.data() });
        })
        .catch((error) =>
          setMessage("Error al obtener el producto seleccionado", error)
        )
        .finally(() => setIsLoading(false));
    }
  }, [itemId]);

  return (
    <>
      <h1>Producto seleccionado</h1>
      {/* <h2> {messageContext && <p>{messageContext}</p>} </h2> */}

      <h3 className={isLoading ? "successMessage" : "errorMessages"}>
        {message}
      </h3>
      {isLoading ? (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />{" "}
          Loading...
        </Button>
      ) : (
        <div className="album py-4 ">
          <div className="container">
            <div className="row justify-content-center">
              <ItemDetail
                {...item}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
