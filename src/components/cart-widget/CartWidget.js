import React, { useContext } from "react";
import { ImCart } from "react-icons/im";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const {getItemsCount} = useContext(CartContext)
  return (
    <>
      <ImCart /> {getItemsCount()}
    </>
  );
};

export default CartWidget;
