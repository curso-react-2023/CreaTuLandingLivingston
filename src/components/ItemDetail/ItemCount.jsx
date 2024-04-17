import React from "react";
import '../../stylesheets/ItemDetail/ItemCount.css';
import useCounter from "../../Hooks/useCounter";

const ItemCount = ({ stock, onAdd }) => {
    let valorInicial=1;
    const { cantidad, agregarCantidad, restarCantidad } = useCounter(stock, valorInicial);

    return(
    <div className='counter'>
        <div className='counterButtonContainer'>
            <button className='counterButton' onClick={restarCantidad}>-</button>
            <div className='counterDisplay'>{ cantidad }</div>
            <button className='counterButton' onClick={agregarCantidad}>+</button>
        </div>
        <button className='counterAddCart' onClick={()=>onAdd(cantidad)}>Agregar al carrito</button>
    </div>
    )

}

export default ItemCount;