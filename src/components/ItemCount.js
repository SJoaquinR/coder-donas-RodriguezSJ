import { useState } from 'react'
import { Button } from "react-bootstrap";

function ItemCount({ stock }) {
    const [count, setCount] = useState(0);

    const onAdd = () => {
        console.log("Añadir al Carrito");
      };

    const setProduct = () => {
        setCount(count + 1);
      };

      const removeProduct = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h2>Stock Disponible {stock - count} / {stock}</h2>
            
            <section className="controls">
            <Button variant="secondary" onClick={removeProduct} value={-1} disabled={count <= 0}>-</Button>
            <span><strong> Cantidad: {count} </strong></span>
            <Button variant="success" onClick={setProduct} value={1} disabled={count >= stock}>+</Button>
            </section>
            <Button onClick={onAdd} variant="primary">Añadir al Carrito</Button>
        </div>
    )
}

export default ItemCount
