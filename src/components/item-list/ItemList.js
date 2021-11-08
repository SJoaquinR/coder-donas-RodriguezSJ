import Item from "../item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="album py-4 ">
        <div className="container">
          <div className="row mx-auto">
            <h1>Catalogo de Productos</h1>
            {products.map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
