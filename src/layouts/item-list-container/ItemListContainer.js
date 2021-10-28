import { products } from "../../data/products";
import ItemList from "../../components/item-list/ItemList";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const ItemListContainer = ({ children, greeting }) => {
  const { categoryValue } = useParams();
  const [itemsProducts, setitemsProducts] = useState(products);

  useEffect(() => {
    if (categoryValue !== undefined) {
      const findItem = products.filter(
        (categorySub) => categorySub.category === categoryValue
      );
      setitemsProducts(findItem);
    }else{
      setitemsProducts(products);
    }
  }, [categoryValue]);

  return (
    <>
      <h1>{greeting}</h1>
      {children}
      <ItemList products={itemsProducts} />
    </>
  );
};

export default ItemListContainer;
