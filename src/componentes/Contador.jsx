import  { useState } from "react";
import "../estilos/ContadorEstilos.css"

function Contador(){
  const [cantidad,setCantidad] = useState(0)

  const handleClickDecrementar = ()=>{
    setCantidad(cantidad-1)
  }
  const handleClickIncrementar = ()=>{
    setCantidad(cantidad+1)
  }

  return (
    <div>
      <span className="cantidad">{cantidad}</span>
      <button id="incrementar" onClick={handleClickIncrementar}>Incrementar</button>
      <button id="decrementar" onClick={handleClickDecrementar}>Decrementar</button>
    </div>
  )
}

export default Contador;
