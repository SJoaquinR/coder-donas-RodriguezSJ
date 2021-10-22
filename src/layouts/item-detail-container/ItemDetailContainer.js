import React from "react";
import ItemDetail from "../../components/item-detail/ItemDetail";

const ItemDetailContainer = () => {
  //Aca nos llega la info de tipo objeto por medio de una promesa
  const item = {
    id: "3",
    producto: "Limon & Amapolas",
    price: 100,
    pictureUrl:
      "https://www.dulcedona.com/wp-content/uploads/2020/10/vainillaspnew-300x300.jpg.webp",
    stock: 1,
  };

  return (
    <div>
      <h2>ItemDetailContainer</h2>
      <ItemDetail {...item} />
    </div>
  );
};

export default ItemDetailContainer;
