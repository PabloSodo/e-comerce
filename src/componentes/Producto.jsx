import { Link } from "react-router-dom";
import  {Card, Button}  from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useAuthContext } from "../Context/AuthContext";

const styles = {
  card:{
    margin :"10px",
    width: '18rem', 
    alignItems: "center",
  }
}


function Producto({id, nombre,precio,categoria, thumbnail, button}){
  const { login} = useAuthContext();

  
  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
        <Card style={styles.card}>
        <Card.Img variant="top" src={thumbnail} style={{ width: '9rem' }}/>
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{precio}</Card.Text>
            <Card.Text>{categoria}</Card.Text>
            <Button as={Link} to={`/producto/${id}`} variant="primary">
              Ver detalle
            </Button>
            {login &&
              <Button style={{margin: "6px",}} as={Link} to={`/producto/modificar/${id}`} variant="primary">
              Modificar 
            </Button>
            }
          </Card.Body>
        </Card>
      </Col> 
    
  );
}

export default Producto;
