import Producto from "./Producto.jsx";
import Buscador from "./Buscador.jsx";
//import ProductosEstilo from "../estilos/ProductosEstilo.css"
import { Row }  from "react-bootstrap";
import Loading from "./Loading.jsx";
import useFetchProducts from "../Utils/Hooks/useFetchProducts.jsx";

function Productos(){
  const {
    productos,
    loading,
    buscar,
    setBuscar
  } = useFetchProducts()

  const handleChange = (event) =>{
    const value = event.target.value;
    console.log("🚀 ~ file: Productos.jsx:38 ~ handleChange ~ value:", value)
    setBuscar(value);
    
  }
  return (
      <Loading loading={loading}>
          <Buscador buscar={buscar} handleChange={handleChange} />
          <h1 
          style={{padding:"20px", display:"flex", justifyContent:"center" }}
          >Listado de productos</h1>
            <Row>
              {productos.map((producto) => 
                <div className="contenedor-producto"  key={producto.id}>  
                  <Producto
                    id={producto.id}
                    nombre={producto.data().title}
                    precio={`$ ${producto.data().price}`}
                    //categoria={producto.id}
                    thumbnail={producto.data().thumbnail}
                    comment={producto.data().comment}
              
                  />
                </div> 
              )}
            </Row>
      </Loading>
    );
}

export default Productos;
