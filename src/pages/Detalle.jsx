import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import { getById } from "../services/productosService";
import { Button } from "react-bootstrap";
import Loading from "../componentes/Loading";

function Detalle(){
  const {id} = useParams()
  const [loading,setLoading] = useState(true)
  const [producto,setProducto] = useState({})
  const [leyenda, setLeyenda] = useState("")
  console.log("🚀 ~ file: Detalle.jsx:4 ~ Detalle ~ params:", id)

  
  const styling = {
    margin: "40px",
    display: "flex",
    justifyContent: "center"
  }
  
  
  
  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          const response = await getById(id)
          // const response = await res.json()
          console.log("🚀 ~ file: Productos.jsx:25 ~ request ~ response:", response, response.data())
          setProducto(response.data())
          setLoading(false)
        }catch(e){
          console.log(e)
        }
        
      }
      request()  
    },
    [id]
  )

  const handleClick = ()=>{
     //alert("Gracias por su compra")
     setLeyenda("Gracias por su compra") 
  }
  
  return (
    <Loading loading={loading}>
      <h1 style={styling}>{producto.title}</h1>
      <img 
        style={
          {width:"20%", height:"20%", margin: "auto", display:"flex", justifyContent:"center"}
        } 
        alt={"Imagen producto"} src={producto.thumbnail}
      />
      <div>{producto.comment}</div>
      <p style={styling}>${producto.price}</p>
      <Button 
        style={
          {margin:"auto", display:"flex", justifyContent:"center"}
        } onClick={handleClick}
      >Comprar</Button>

      <div style={styling}>{leyenda}</div>
    </Loading>
  );
}

export default Detalle;
