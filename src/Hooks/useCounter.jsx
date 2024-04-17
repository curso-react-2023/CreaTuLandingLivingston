import React, { useState } from 'react';

function useCounter(stock, valorInicial) {
  const [cantidad, setCantidad] = useState(valorInicial);

  const agregarCantidad = () => {
    cantidad < stock && setCantidad(cantidad+1);
  }

  const restarCantidad = () => {
    cantidad > valorInicial && setCantidad(cantidad-1);
  }
  
  return {
    cantidad,
    agregarCantidad,
    restarCantidad
  }
}

export default useCounter;