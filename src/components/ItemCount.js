import { Button } from "react-bootstrap";

function ItemCount({ stock, quantity, setQuantity }) {
  const handlePlus = () => setQuantity(quantity + 1);
  const handleRest = () => setQuantity(quantity - 1);

  return (
    <>
        <Button
          variant={`btn ${quantity === 0 ? "btn-danger disabled" : "btn-secondary"}`}
          onClick={handleRest}
        >
          -
        </Button>
        <span className="mx-3">
          <strong>{quantity}</strong>
        </span>
        <Button
          variant={`btn ${quantity === stock ? "btn-danger disabled" : "btn-success"}`}
          onClick={handlePlus}
        >
          +
        </Button>
    </>
  );
}

export default ItemCount;