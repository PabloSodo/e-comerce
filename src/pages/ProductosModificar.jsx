import { useEffect, useState } from 'react';
import {  useForm } from 'react-hook-form'; //https://react-hook-form.com/
import {Button, FloatingLabel, Form } from 'react-bootstrap'
import '../estilos/RegistroEstilo.css'
import { deleteProducto, getById, update } from '../services/productosService';
import { useParams } from 'react-router-dom';



function ProductosModificar() {
  const {id} = useParams();
  const [leyenda, setLeyenda] = useState("")
  const { 
    register, 
    handleSubmit,
    setValue, 
  } = useForm({mode: "onChange"});
  

  useEffect(
    ()=>{
      const result = async ()=>{
        try {
          const response = await getById(id);
          setValue("title", response.data().title);
          setValue("price", response.data().price);
          setValue("thumbnail", response.data().thumbnail);
          setValue("comment", response.data().comment);
        } catch (error) {
          console.log(error)
        }
      } ;
      result();
    },[id, setValue]
  )

  const onSubmit= async (data) => {
    try {
      const document = await update(id, data)
      console.log("🚀 ~ file: ProductosAlta.jsx:20 ~ onSubmit ~ document:", document)  
    } catch (error) {
      console.log(error)
    }
  };
  const handleClick = ()=>{
    setLeyenda("Su producto fue almacenado correctamente") 
 }
  const handleClickEliminar= async ()=>{
    try {
      const response = await deleteProducto(id)
      console.log("🚀 ~ file: ProductosModificar.jsx:50 ~ handleClickEliminar ~ response:", response)
      setLeyenda("Su producto fue eliminado")
    } catch (error) {
      console.log(error)
    } 
  }
 
  return(
    <div>
      <h1>Modificar Producto</h1>
      <Button variant='danger' onClick={handleClickEliminar}>Eliminar</Button>
      <Form onSubmit={handleSubmit(onSubmit)}>

        {/*NOMBRE*/}
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el nombre del producto" 
          {...register("title")}
        />
      </Form.Group>
      {/*PRECIO*/}
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" placeholder="Ingresa el precio" 
          {...register("price")}
        />
      </Form.Group>
      {/*IMG*/}
      <Form.Group className="mb-3" controlId="formBasicImagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" placeholder="Ingresa la URL de la Imagen" 
          {...register("thumbnail")}
        />
      </Form.Group>
      {/*COMMENT*/}
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
export default ProductosModificar;