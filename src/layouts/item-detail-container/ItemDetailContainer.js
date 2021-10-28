import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../../components/item-detail/ItemDetail";
import { useState } from "react";
import { products } from "../../data/products";
import { Button, Spinner } from "react-bootstrap";
import { mook } from "../../helpers/mook";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({})

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    mook(
      products,
      itemId,
      setMessage,
      setIsSuccess,
      setIsLoading,
      setIsFinished,
      setItem
    );
    // const findItem = products.filter(item => item.id === itemId)
		// setItem(...findItem)
	}, [itemId])


  return (
    <>
      <h1>Producto seleccionado</h1>
      
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
