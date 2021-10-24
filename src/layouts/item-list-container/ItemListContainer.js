import { products } from "../../data/products";
import ItemList from "../../components/item-list/ItemList";
import ItemCount from "../../components/ItemCount";
// import { useParams } from "react-router";

const ItemListContainer = ({children, greeting}) => {
  // const { itemId } = useParams();

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
