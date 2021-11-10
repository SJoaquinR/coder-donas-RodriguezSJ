import { Button } from "react-bootstrap";

function ItemCount({ stock, quantity, setQuantity }) {
  const handlePlus = () => setQuantity(quantity + 1);
  const handleRest = () => setQuantity(quantity - 1);

  return (
    <>
        <Button
          variant={`btn ${quantity === 0 ? "btn-danger disabled" : "btn-secondary"}`}
          onClick={handleRest}
          // value={-1}
          // disabled={quantity <= 0}
        >
          -
        </Button>
        <span className="mx-3">
          <strong>{quantity}</strong>
        </span>
        <Button
          variant={`btn ${quantity === stock ? "btn-danger disabled" : "btn-success"}`}
          onClick={handlePlus}
          // value={1}
          // disabled={quantity >= stock}
        >
          +
        </Button>
    </>
  );
}

export default ItemCount;