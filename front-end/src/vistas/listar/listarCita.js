import { useState, useEffect } from "react"
import axios from "axios"
import './../../estilos/listarCita.css'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/cita/'

const CompListCita = () => {
    
  

    const [citas, setCitas] = useState([])
    useEffect( ()=>{
        getCitas()
    },[])

    //Procedimiento para mostrar todos los productos
    const getCitas = async () => {
        const res = await axios.get(URI)
        setCitas(res.data)
    }
    
    const deleteCita = async (id_cita) => {
        await axios.delete(`${URI}${id_cita}`)
        getCitas()
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

      <div className="contenedor-body8">

  <table className="styled-table32"> 

  <thead> 
    <tr> 
      <th>#</th> 
      <th>Numero Autorización</th> 
      <th>Nombre</th> 
      <th>Fecha Cita</th> 
      <th>Hora Cita</th> 
      <th>Tipo Cita</th> 
      <th>Sintomas</th> 
      <th>Eliminar</th>
    </tr> 
  </thead> 
    <tbody> 
      
    { citas.map ( (citas) => (
      
                    <tr key={ citas.id_cliente}>
                    <td> { citas.dni_cita}</td>
                    <td> { citas.numeroIPS}</td>
                    <td> { citas.nombreCita}</td>
                    <td> { citas.fechaCita}</td>
                    <td> { citas.horaCita}</td>
                    <td> { citas.tipoCita}</td>
                    <td> { citas.sintomas}</td>
                    <td>
                    <button onClick={ ()=>deleteCita(citas.id_cita)} className='button16'>Delete</button>
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

export default CompListCita