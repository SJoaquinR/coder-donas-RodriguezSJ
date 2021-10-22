import { Button, Card } from "react-bootstrap";
//import ItemDetailContainer from "../../layouts/item-detail-container/ItemDetailContainer";
import "./Item.css";

const Item = ({ id, producto, price, pictureUrl, stock }) => {
  const handleShowItemClick = () => {
    console.log(`Detalles del Producto ${id} seleccionado`);
    //<ItemDetailContainer />
    
  };

  return (
    <Card className="Card-style">
      <Card.Body>
        <img
          src={pictureUrl}
          style={{ width: "200px" }}
          className="border border-dark rounded"
          alt=""
        />
        <Card.Text>
          <strong>ID:</strong> {id}
        </Card.Text>
        <Card.Text>
          <strong>Producto:</strong> {producto}
        </Card.Text>
        <Card.Text>
          <strong>Precio:</strong> ${price}
        </Card.Text>
        <Card.Text>
          <strong>Stock disponible: </strong> {stock}
        </Card.Text>
        <Button variant="primary" onClick={handleShowItemClick}>
          Ver detalle del producto
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
