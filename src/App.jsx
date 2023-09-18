import "./App.css";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Contador from "./componentes/Contador";
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';//Alias en el import, BrowserRouter
import NavBarMenu from "./componentes/NavBar.jsx";
import Detalle from "./pages/Detalle";
import NotFound from "./pages/NotFound";
import Container from "react-bootstrap/Container";
import ProductosAlta from "./pages/ProductosAlta";
import ProductosModificar from "./pages/ProductosModificar";
import { useState } from "react";
import AuthProvider from "./Context/AuthContext";



function App() {
  const [login, setLogin] = useState(false);
  return (
    <Router>
      <AuthProvider>
        <NavBarMenu isLogin={login} setLogin={setLogin}/>
        
        <Container>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/alta" element={<Registro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contador" element={<Contador />} />
              <Route path="/producto/alta" element={<ProductosAlta />} />
              <Route path="/producto/modificar/:id" element={<ProductosModificar />} />
              <Route path="/producto/:id" element={<Detalle />} />
              <Route path="/*" element={<NotFound />} />  
          </Routes>
        </Container>
        
      </AuthProvider>

      <footer></footer>
    </Router>
  );
}

export default App;
