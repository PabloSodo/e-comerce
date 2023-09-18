import { Link } from "react-router-dom";
/*import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';*/
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import { useAuthContext } from "../Context/AuthContext";

function NavBarMenu(){
  //const { login, handleLogout, user} = useContext(AuthContext);
  const { login, handleLogout, user} = useAuthContext();

    return (
       <div> 
          <Navbar bg="light" expand="lg">  
            <Navbar.Brand as={Link} to="/"style={{marginLeft:"10px"}}>App FullStack</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {!login &&(
                    <>
                    <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
                    <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
                    </>
                  )}
                  {login && (              
                    <>
                      <Nav.Link as={Link} to="/contador">Contador</Nav.Link>
                      <NavDropdown title="Productos" id="basic-nav-dropdown">
                      <NavDropdown.Item as={ Link } to="/producto/alta">Nuevo</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>
                    </>
                  )}
                </Nav>
            </Navbar.Collapse>
            {login && <div>Bienvenido {user.name}</div>}
          </Navbar>
        <fieldset></fieldset>
        </div>
    );
}

export default NavBarMenu;