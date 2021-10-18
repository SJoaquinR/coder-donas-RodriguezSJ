import React, { useState } from 'react'

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
            <button className="btn btn-secondary" onClick={removeProduct} value={-1} disabled={count <= 0}>-</button>
            <span><strong> Cantidad: {count} </strong></span>
            <button className="btn btn-success" onClick={setProduct} value={1} disabled={count >= stock}>+</button>
            </section>
            <button onClick={onAdd} className="btn btn-primary">Añadir al Carrito</button>
        </div>
    )
}

export default ItemCount
