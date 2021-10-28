import { Button } from "react-bootstrap";

function ItemCount({ stock, quantity, setQuantity }) {
  const handlePlus = () => setQuantity(quantity + 1);
  const handleRest = () => setQuantity(quantity - 1);

  return (
    <>
        <Button
          variant="secondary"
          onClick={handleRest}
          value={-1}
          disabled={quantity <= 0}
        >
          -
        </Button>
        <span>
          <strong> Cantidad seleccionada: {quantity} </strong>
        </span>
        <Button
          variant="success"
          onClick={handlePlus}
          value={1}
          disabled={quantity >= stock}
        >
          +
        </Button>
    </>
  );
}

export default ItemCount;
