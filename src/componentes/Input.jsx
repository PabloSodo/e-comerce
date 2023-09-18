import { Form } from "react-bootstrap";

function Input({label, type="text", name, register, placeholder}){

    return (
      <div>
           <Form.Group className="mb-3" controlId={name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} 
          {...register}
        />
       {/*} <Form.Text className="text-muted">
        {errors.nombre && <span className="errorSpan">Campo obligatorio</span>}
    </Form.Text> */}
      </Form.Group>
      </div>
    );
  }
  
  export default Input;