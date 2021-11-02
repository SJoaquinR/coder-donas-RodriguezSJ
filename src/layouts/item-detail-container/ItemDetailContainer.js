import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Button, Spinner } from "react-bootstrap";
import { products } from "../../data/products";
import { mook } from "../../helpers/mook";
import ItemDetail from "../../components/item-detail/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({})

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  
  // const [messageContext, setMessageContext] = useState("");

  const [quantity, setQuantity] = useState(0);

  // useEffect(() => {
  //   if (isTrue) {
  //     setMessageContext(`Context recibido: ${isTrue}`)
  //   }
  // },[isTrue]);

  useEffect(() => {
    if (itemId) {
      mook(
        products,
        itemId,
        setMessage,
        setIsSuccess,
        setIsLoading,
        setIsFinished,
        setItem
      );
    }
	}, [itemId])


  return (
    <>
      <h1>Producto seleccionado</h1>
      {/* <h2> {messageContext && <p>{messageContext}</p>} </h2> */}

      <h3 className={isSuccess ? "successMessage" : "errorMessages"}>
        {message}
      </h3>
      {isLoading && (
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
      )}
      {isFinished && 
        <ItemDetail {...item} quantity={quantity} setQuantity={setQuantity} /> }
    </>
  );
};

export default ItemDetailContainer;
