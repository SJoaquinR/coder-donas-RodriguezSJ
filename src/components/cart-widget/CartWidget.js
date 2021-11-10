import React, { useContext } from "react";
import { ImCart } from "react-icons/im";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { items, getItemsCount } = useContext(CartContext);

  return (
    <>
      {items.length === 0 ? (
        <ImCart />
      ) : (
        <>
          <ImCart /> <span>{getItemsCount()}</span>
        </>
      )}
    </>
  );
};

export default CartWidget;
