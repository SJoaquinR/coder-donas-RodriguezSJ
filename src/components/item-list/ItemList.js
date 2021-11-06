import Item from "../item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <>
      <h1>Catalogo de Productos</h1>
      {products.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </>
  );
};

export default ItemList;
