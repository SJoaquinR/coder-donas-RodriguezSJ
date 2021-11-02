import ItemDetail from "../../components/item-detail/ItemDetail";

const Cart = ({ items }) => {
  return (
    <>
      {items.map((currentItem) => {
        const { item } = currentItem;
        return <ItemDetail key={item.id} {...item} quantity={currentItem.quantity} />;
      })}
    </>
  );
};

export default Cart;
