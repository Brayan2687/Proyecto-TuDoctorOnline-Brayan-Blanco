import { useState, useEffect } from "react"
import axios from "axios"
import './../../estilos/listarAgenda.css'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/empleado/'

const CompListCitaEmpleado = () => {
    
  

    const [empleado, setEmpleados] = useState([])
    useEffect( ()=>{
      getEmpleado()
    },[])

    //Procedimiento para mostrar todos los productos
    const getEmpleado = async () => {
        const res = await axios.get(URI)
        setEmpleados(res.data)
    }
    
    const deleteEmpleado = async (idEmpleado) => {
        await axios.delete(`${URI}${idEmpleado}`)
        getEmpleado()
        alert('Registro Eliminado Correctamente')

    }

    return(

  <div>

  <div className="header">

      <h1 className='titulo'>

      TuDoctorOnline

      </h1>

      </div>
  <div className='body1'>
</div>

      <div className="contenedor-body45">

  <table className="styled-table32"> 

  <thead> 
    <tr> 
      <th>#</th> 
      <th>Nombre</th> 
      <th>Estado</th> 
      <th>Especializacion</th> 
      <th>Tuno</th> 
      <th>Hora Inicio</th> 
      <th>Hora Final</th> 
      <th>Correo</th> 
      <th>Actualizar</th> 
      <th>Eliminar</th>
    </tr> 
  </thead> 
    <tbody> 
      
    { empleado.map ( (empleados) => (
    
    <tr key={ empleados.idEmpleado}>
    <td> { empleados.idEmpleado}</td>
    <td> { empleados.nombreEmpleado}</td>
    <td> { empleados.estadoEmpleado}</td>
    <td> { empleados.especializacion}</td>
    <td> { empleados.diasDiponibles}</td>
    <td> { empleados.turnoInicio}</td>
    <td> { empleados.turnoFin}</td>
    <td> { empleados.correoEmpleado}</td>
    <td><Link to={`/actualizarEmpleado/${empleados.idEmpleado}`}><button className='button16'>Actualizar</button></Link></td>
    <td>
     <button onClick={ ()=>deleteEmpleado(empleados.idEmpleado)} className='button16'>Delete</button>
    </td>
    </tr>
    ))}
  </tbody> 
  </table>

  <Link to={'/menuGerente'}><button  className='button37'>Regresar</button></Link>
  </div>
  




</div>


)
}

export default CompListCitaEmpleado