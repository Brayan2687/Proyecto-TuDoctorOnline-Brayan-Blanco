import './../../estilos/menuGerente.css'
import { useState, useEffect } from "react"
import axios from "axios"
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/empleado/'

const CompListCitaPaciente = () =>{

    const [empleados, setEmpleados] = useState([])
    useEffect( ()=>{
        getEmpleados()
    },[])

    //Procedimiento para mostrar todos los productos
    const getEmpleados = async () => {
        const res = await axios.get(URI)
        setEmpleados(res.data)
    }

        
    const deleteCita = async (idEmpleado) => {
      await axios.delete(`${URI}${idEmpleado}`)
      getEmpleados()
      alert('Registro Eliminado Correctamente')

  }
    

    return(

        <div className="body10">
            <div className='circulo-logo'>
            <img src="https://img.freepik.com/foto-gratis/antecedentes-medicos-corte-papel-simbolo-medico-caduceo-co_1232-1767.jpg?w=1380&t=st=1700798747~exp=1700799347~hmac=f1b6dff6b764cc0525156cc61b93f0a8d037a7b67fe4ba0e18f53cf022a8cdf3" className="brand_logo" alt="Logo"/>
            </div>
            <div className='contenedor-logo'>

            <h1 className='name'>
            
            TuDoctorOnline

            </h1>

            <h2 className='cargo'>
                Cargo: Gerente
                <br/>
                <br/>

                Todos Los Empleados:
            </h2>


            </div>
            <div className='contenedor-funcion'>
            <h1>
                Bienvenido Gerente
            </h1>


            </div>

            <div className='contenedor-texto'>
                <div className='formulario8'>

                <table className="styled-table1"> 
        
<thead> 
  <tr> 
    <th>Nombre</th> 
    <th>Especialización</th>
    <th>Correo</th> 
    <th>Dias Disponibles</th>
    <th>Eliminar</th>
  </tr> 
</thead> 
  <tbody> 
    
  { empleados.map ( (empleados) => (
    
                  <tr key={ empleados.idEmpleado}>
                  <td> { empleados.nombreEmpleado}</td>
                  <td> { empleados.especializacion}</td>
                  <td> { empleados.correoEmpleado}</td>
                  <td> { empleados.diasDiponibles}</td>
                  <td>
                    <button onClick={ ()=>deleteCita(empleados.idEmpleado)} className='button16'>Delete</button>
                    </td>
                  </tr>
                
  ))}
</tbody> 
</table>

                </div>
            </div>


        <div className='botones'>
        <Link to={'/listarCitasPaciente'}><button className='doctor'>Lista De Doctores</button></Link>
        <Link to={'/registrarEmpleado'}><button className='doctor'>Registrar Empleado</button></Link>
        <Link to={'/listarCitas'}><button className='cita'>Citas Disponibles</button></Link>
        <Link to={'/'}><button className='cerrar'>Cerrar Sesión</button></Link>

        </div>

        </div>

    )

}

export default CompListCitaPaciente