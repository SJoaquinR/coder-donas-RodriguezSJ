import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { promises } from "../../helpers/promises";
import Item from "../item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [currentProducts, setCurrentProducts] = useState([]);


  //Efecto de montaje
  useEffect(() => {
    if (products) {
      //Async Mock
      promises(
        products,
        setMessage,
        setIsSuccess,
        setIsLoading,
        setIsFinished,
        setCurrentProducts
      );
    }
  }, [products]);

  
  return (
    <div>
      <h1>Catalogo de Productos</h1>
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
          currentProducts.map((item) => <Item key={item.id} {...item} />) }
    </div>
  );
};

export default ItemList;
