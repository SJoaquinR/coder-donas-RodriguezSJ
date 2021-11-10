import { createContext, useState } from "react";

export const CartContext = createContext([]);

// const mockItem = [
//   {
//     item: {
//       id: 1,
//       name: "Item 1",
//     },
//     quantity: 3,
//   },
// ];

export const CartProvider = ({ defaultValue = [], children }) => {
  const [items, setItems] = useState(defaultValue);

  const addItem = (currentItem) => {
    //.some(({ item }) -> usamos el item de mi producto -> lo desestructuramos y lo comparamos con el id del producto que estamos agregando)
    //.some -> devuelve true si alguno de los elementos del array cumple con la condicion
    if (items.some(({ item }) => item.id === currentItem.item.id)) {
      return;
    }
    setItems([...items, currentItem]);
  };

  const removeItem = (itemId) => {
    const currentItems = items.filter(({ item }) => item.id !== itemId);
    setItems(currentItems);
  };

  const clear = () => setItems(defaultValue);

  // True if item is in cart
  // False if item is not in cart
  const isInCart = (itemId) => {
    return items.some((item) => item.item.id === itemId);
  };

  const getItemsCount = () => {
    return items.reduce((current, item) => current + item.quantity, 0);
  };

  const calculateTotal = () =>
    items.reduce(
      (current, item) => current + item.item.price * item.quantity,
      0
    );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clear,
        isInCart,
        getItemsCount,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
