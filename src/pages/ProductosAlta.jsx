import { useState } from 'react';
import {  useForm } from 'react-hook-form'; //https://react-hook-form.com/
import {Button, FloatingLabel, Form } from 'react-bootstrap'
import '../estilos/RegistroEstilo.css'
import { create } from '../services/productosService';



function ProductosAlta() {
  
  const { 
    register, 
    handleSubmit,
    formState: { errors }, 
  } = useForm({mode: "onChange"});
  const [leyenda, setLeyenda] = useState("")

  const onSubmit= async (data) => {
    try {
      console.log(data)
      const document = await create (data)
      console.log("🚀 ~ file: ProductosAlta.jsx:20 ~ onSubmit ~ document:", document)
      
    } catch (error) {
      console.log(error)
    }
  };
  const handleClick = ()=>{
    setLeyenda("Su producto fue almacenado correctamente") 
 }
 
  return(
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>

        {/*NOMBRE*/}
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el nombre del producto" 
          {...register("title")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" placeholder="Ingresa el precio" 
          {...register("price")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicImagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" placeholder="Ingresa la URL de la Imagen" 
          {...register("thumbnail")}
        />
      </Form.Group>
      
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Añade una descripción"
          style={{ height: '100px' }}
          {...register("comment")}
        />
      </FloatingLabel>
        
         {/*BUTTON*/}
      <Button variant="primary" type="submit" onClick={handleClick} style={{margin:"10px"}}>Guardar</Button>{' '}
    </Form>
        <div style = {
          {margin: "40px", display: "flex", justifyContent: "center"}
        }>{leyenda}</div>
    </div>
  );
}
export default ProductosAlta