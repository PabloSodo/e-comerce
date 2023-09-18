import {  useForm } from 'react-hook-form'; //https://react-hook-form.com/
import { Form } from 'react-bootstrap';
import '../estilos/RegistroEstilo.css';
import { login } from "../services/usuariosService";
import ButtonLoading from '../componentes/ButtonLoading';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginMessage } from '../Utils/errorMessage';
import AlertCustom from '../componentes/alertCustom';
import { useAuthContext } from '../Context/AuthContext';




function Login() {
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm({mode: "onChange"});
  const [alert, setAlert] = useState({variant: '', text:''})
  const [loading, setLoading]= useState(false)
  const navigate = useNavigate();
  //const context = useContext(AuthContext)
  const context = useAuthContext();

  const onSubmit= async (data) => {
    setLoading(true)
    try {
      const user = await login(data.email, data.password);  
       console.log("🚀 ~ file: Login.jsx:19 ~ onSubmit ~ user:", user) 
       context.handleLogin(user); 
       navigate("/")
    } catch (error) {
      console.log(error)
     setAlert({
        variant: 'danger', 
        text: loginMessage[error.code] || "Ha ocurrido un error"
      });
      setLoading(false)
    }
  };

  return(
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/*EMAIL*/}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu e-mail" 
          {...register("email",{required:true})}
        />
        <Form.Text className="text-muted">
          {errors.email && <span className="errorSpan"> Campo obligatorio</span>}
        </Form.Text>
      </Form.Group>

        {/*PASSWORD*/}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" 
          {...register("password",{
            required:true,
            pattern: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g
          })}
        />
        <Form.Text className="text-muted">
          {errors.password && (
            <div>
              {errors.password?.type==="required" && 
                <span className="errorSpan">Campo obligatorio</span>
              }
              {errors.password?.type==="pattern" && 
                <span className="errorSpan">La contraseña debe contener una mayúscula, 
                  al menos un número, un simbolo!(@#$%^&*_=+-), 
                  un mín. 8 y un max. de 12 caracteres.</span>
              }
            </div>)
          }
        </Form.Text>          
      </Form.Group> {/*PASSWORD*/}

         {/*BUTTON*/}
         <ButtonLoading loading={loading}>Ingresar</ButtonLoading>
         {/*<Button variant="primary" type="submit">
          Ingresar
        </Button>*/}
         <AlertCustom
         {...alert}
         />
    </Form>
    </div>
  );
}
export default Login;