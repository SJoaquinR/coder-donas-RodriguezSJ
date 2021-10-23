import { products } from "../../data/products";
import ItemList from "../../components/item-list/ItemList";
import ItemCount from "../../components/ItemCount";

const ItemListContainer = ({children, greeting}) => {
  return (
    <div>
      <h1>{greeting}</h1>
      {children}
      <ItemCount stock="5" />
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
