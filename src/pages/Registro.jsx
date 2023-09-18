import {  useForm } from 'react-hook-form'; //https://react-hook-form.com/
import { Form } from 'react-bootstrap'
import { create } from '../services/usuariosService.js';
import '../estilos/RegistroEstilo.css'
import Input from '../componentes/Input.jsx';
import ButtonLoading from '../componentes/ButtonLoading.jsx';
import { useState } from 'react';
import AlertCustom from '../componentes/alertCustom.jsx';
import { registroMessage } from '../Utils/errorMessage.js';




function Registro() {
  
  const { 
    register, 
    handleSubmit,
    getValues, 
    formState: { errors }, 
  } = useForm({mode: "onChange"});

  const [loading, setLoading]= useState(false);
  const [alert, setAlert] = useState({variant: '', text:''})

  const onSubmit= async (data) => {
    setLoading(true)
    console.log("🚀 ~ file: Registro.jsx:24 ~ onSubmit ~ data:", data)
    try {
      const user = await create(data);  
      console.log("🚀 ~ file: Registro.jsx:21 ~ onSubmit ~ user:", user);
      setLoading(false);
      setAlert({
        variant: 'success', 
        text:'Registro exitoso',
        duration: 2000,
        link: "/login",
      });
    
    } catch (error) {
      console.log(error.code);
      //if(error.code === "auth/email-already-in-use"){
      //  setAlert({variant: 'danger', text:'El email ya se encuentra registrado'})
      setAlert({
        variant: 'danger', 
        text: registroMessage[error.code] || "Ha ocurrido un error"
      });
      setLoading(false);
    }
  };

  return(
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
       
        {/*NOMBRE*/}
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Input
          label="Nombre"
          name="formBasicNombre"
          placeholder="Ingresa tu Nombre" 
          register={{...register("nombre",{required:true })}}      
        />
        <Form.Text className="text-muted">
          {errors.nombre && <span className="errorSpan">Campo obligatorio</span>}
        </Form.Text> 
      </Form.Group>

        {/*APELLIDO*/}
      <Form.Group className="mb-3" controlId="formBasicApellido">
        <Input
          label="Apellido"
          name="formBasicApellido"
          placeholder="Ingresa tu Apellido" 
          register={{...register("apellido",{required:true })}}      
        />
        <Form.Text className="text-muted">
          {errors.apellido && <span className="errorSpan">Campo obligatorio</span>} 
        </Form.Text>
      </Form.Group>

        {/*EMAIL*/}
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Input
          label="Email"
          name="formBasicEmail"
          type="email"
          placeholder="Ingresa tu Email" 
          register={{...register("email",{required:true })}}      
        />
        <Form.Text className="text-muted">
          Nunca compartiremos tus datos a terceros. 
          {errors.email && <span className="errorSpan"> Campo obligatorio</span>}
        </Form.Text>
      </Form.Group>

        {/*PASSWORD*/}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Input
          label="Contraseña"
          name="formBasicContraseña"
          type="password"
          placeholder="Ingresa tu Contraseña" 
          register={{...register("password",{
            required:true,
            pattern: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g
          })}}      
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

         {/*CONFIRM PASSWORD*/}
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
      <Input
          label="Confirmar contraseña"
          name="formBasicConfirmContraseña"
          type="password"
          placeholder="Confirmar tu contraseña" 
          register={{...register("confirmPassword", 
          {required:true,
            validate: { //compara contrasena
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || false;
              }
            } 
          })}}      
        />
        <Form.Text className="text-muted">
          {errors.confirmPassword && <p className="errorSpan"> Las contraseñas deben coincidir.</p>}
        </Form.Text>
      </Form.Group> {/*CONFIRM PASSWORD*/}

         {/*BUTTON*/}
         <ButtonLoading loading={loading}>Registrarse</ButtonLoading>
         <AlertCustom
          //variant={alert.variant}   text={alert.text}
          {...alert}
         />
    </Form>
    </div>
  );
}
export default Registro