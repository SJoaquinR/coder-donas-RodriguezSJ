import ItemDetail from "../../components/item-detail/ItemDetail";

const Cart = ({ items }) => {
  return (
    <>
      <div className="album py-4 ">
        <div className="container">
          <div className="row mx-auto">
            {items.map((currentItem) => {
              const { item } = currentItem;
              return (
                <ItemDetail
                  key={item.id}
                  {...item}
                  quantity={currentItem.quantity}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
