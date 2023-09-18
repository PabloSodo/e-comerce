
function Buscador({buscar, handleChange}){
  
  return (
    <div>
         <input 
          placeholder="Buscar" className="inputBuscar"
          type="text" name="buscar" 
          value={buscar} onChange={handleChange}
          />
    </div>
  );
}

export default Buscador;
