import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../../components/item-detail/ItemDetail";
import { useState } from "react";
import { products } from "../../data/products";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({})

  useEffect(() => {
		const findItem = products.filter(item => item.id === itemId)
		setItem(...findItem)
	}, [itemId])


  return (
    <div>
      <h1>Producto seleccionado</h1>
        <ItemDetail {...item} />
    </div>
  );
};

export default ItemDetailContainer;
