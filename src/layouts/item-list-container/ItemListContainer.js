import React from "react";

const ItemListContainer = ({children, greeting}) => {
  return (
    <div>
      <h1>{greeting}</h1>
      {children}
    </div>
  );
};

export default ItemListContainer;
