import { useEffect, useState } from "react";
import { getAllProductos } from "../../services/productosService";

function useFetchProducts (){
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const [buscar, setBuscar] = useState('piano')

    useEffect(()=>{
          const request = async ()=>{
            try{
              const querySnapshot = await getAllProductos(buscar);
              console.log("~ file:Productos.jsx:25 ~request ~ response:", querySnapshot.docs);
              setProductos(querySnapshot.docs);
              setLoading(false);
              
            }catch(error){
              console.log("ERROR")
              console.log(error);
            }
          }
          request ();
        }, [buscar]);
      
      return{
        productos,
        loading,
        buscar,
        setBuscar
      };

};

export default useFetchProducts;