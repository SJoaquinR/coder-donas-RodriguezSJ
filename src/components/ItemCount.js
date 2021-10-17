import React, { useState } from 'react'

function ItemCount({ stock }) {
    const [count, setCount] = useState(0);

    const onAdd = () => {
        setCount(count + 1);
      };

      const onRemove = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h2>Stock Disponible {stock - count} / {stock}</h2>
            <h3>Cantidad de Productos en el carrito: <span>{count}</span></h3>
            <section className="controls">
            <button className="btn btn-success" onClick={onAdd} value={1} disabled={count >= stock}>Añadir al Carrito</button>
            <button className="btn btn-secondary" onClick={onRemove} value={-1} disabled={count <= 0}>Retirar del Carrito</button>
            </section>
        </div>
    )
}

export default ItemCount
