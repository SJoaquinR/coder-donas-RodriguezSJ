import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, product, price, pictureUrl, stock }) => {

  return (
    <div className="col-md-4">
      <div className="mb-4 ">
        <Card className="Card-style ">
          <Card.Body>
            <img
              src={pictureUrl}
              style={{ width: "200px" }}
              className="border border-dark rounded"
              alt={`Imagen del prodcuto ${product}`}
            />
            <Card.Text>
              <strong>Producto:</strong> {product}
            </Card.Text>
            <Card.Text>
              <strong>Precio:</strong> ${price}
            </Card.Text>
            <Card.Text>
              <strong>Stock disponible: </strong> {stock}
            </Card.Text>
            <Link to={`../item/${id}`}>
              <Button variant="primary">Ver detalle del producto</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Item;
