import React from "react";
import { ImCart } from "react-icons/im";

const CartWidget = ({ countItem }) => {
  return (
    <>
      <ImCart /> {countItem}
    </>
  );
};

export default CartWidget;
