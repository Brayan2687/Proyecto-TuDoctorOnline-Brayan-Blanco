import React, { useState } from 'react'
import './../../estilos/login.css'
import  axios  from 'axios'
import { Link, useNavigate } from "react-router-dom"

 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


const URI = 'http://localhost:8000/login'



let nombre
let nombreP
let cargo  
let idrol

function Login() {

  const [correoEmpleado, setCorreoEmpleado] = useState('')
  const [contrasenaEmpleado, setContrasenaEmpleado] = useState('')
  const navigate = useNavigate()
  //Procedimiento guardar


  const iniciarSesion = async (e) => {

      e.preventDefault()
      
      const response = await axios.post(URI, {correo: correoEmpleado,contrasena: contrasenaEmpleado})
      const acceso = response.data.message; 
      nombre = response.data.nombre;
      nombreP = response.data.nombreP;
      cargo = response.data.cargo;
      idrol = response.data.rol;

      if (acceso==="INGRESO EMPLEADO") {
        alert("Acceso exitoso");  
        if (response.data.rol === 1) {

        
          navigate('/menuGerente'); 
          
        
        } else if(response.data.rol === 2){
         
          navigate('/menuDoctor');
          

        }
        
      }
      else if (acceso==="INGRESO PACIENTE") {

        alert("Acceso exitoso");
        alert("Bienvenido: "+nombreP);
        navigate('/menuPaciente')
        

      }else if(acceso==="DENEGADO"){

        alert("Acceso Denegado Compruebe Los Datos Ingresados");

      }


}

  
    return (


      <div className='bodyCompleto'>

<div className="container h-100">
		<div className="d-flex justify-content-center h-100">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container">
						<img src="https://img.freepik.com/foto-gratis/antecedentes-medicos-corte-papel-simbolo-medico-caduceo-co_1232-1767.jpg?w=1380&t=st=1700798747~exp=1700799347~hmac=f1b6dff6b764cc0525156cc61b93f0a8d037a7b67fe4ba0e18f53cf022a8cdf3" className="brand_logo" alt="Logo"/>
					</div>
				</div>
				<div className="d-flex justify-content-center form_container">
					<form onSubmit={iniciarSesion}>
						<div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
              <label>Correo</label>
							<input 
              type="email" 
              className="form-control input_user" 
              placeholder="Correo"               
              value={correoEmpleado}
              onChange={(e) => setCorreoEmpleado(e.target.value)}
              required/>
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
              <label>Contraseña</label>
							<input  
              className="form-control input_pass" 
              placeholder="Contraseña" 
              type="password"
              value={contrasenaEmpleado}
              onChange={(e) => setContrasenaEmpleado(e.target.value)}
              required/>

            </div>
				 	<button type="submit" name="button" className="button6">Iniciar sesión</button>

					</form>
          <Link to={'/registrarPaciente'}><button type="submit" name="button" className="button7">Crear Cuenta</button></Link>
				</div>
			</div>
		</div>
	</div>
  </div>
    );

    
  }
  
  
  export function p(){
    let dato

    if (idrol) {
      
      dato = nombre+'-'+cargo

    } else{
      
      dato = nombreP

    }
    return dato
  }






  
  
  export default Login;
