import './../../estilos/menuDoctor.css'
import { useState, useEffect } from "react"
import axios from "axios"
import {Link} from 'react-router-dom'
import { p } from './../login/iniciarSesion.js'

const URI = 'http://localhost:8000/cita/empleado/'


const CompMenuDoctor = () =>{

    //Procedimiento para mostrar todos los productos


    const nombreC = p()
    
    localStorage.setItem("cita",nombreC);
  

    const [nombre] = useState(nombreC); // Nombre que se quiere buscar
    const [usuario, setUsuarios] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsuariosPorNombre = async () => {
            try {
                const response = await axios.get(URI+nombre);
                const data = response.data;
                setUsuarios(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUsuariosPorNombre();
    }, [nombre]);

    let cita = localStorage.getItem("cita")
   



window.onbeforeunload = function(){
        
        return 'Algunas cosas se dañaran al momento de actualizar'
    

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
                Cargo: Doctor
                <br/>
                <br/>

                Todos Las Citas:
            </h2>


            </div>
            <div className='contenedor-funcion1'>
            <h1>
                Bienvenido Doctor {cita}
            </h1>


            </div>

            <div className='contenedor-texto'>
                <div className='formulario8'>

                <table className="styled-table1"> 
        
<thead> 
  <tr> 
    <th>#</th> 
    <th>Nombre</th>
    <th>Fecha</th>
    <th>Hora</th> 
    <th>Tipo De cita</th>
    <th>Sintomas</th>
  </tr> 
</thead> 
  <tbody> 


  {console.log(`su nombree es:`+nombreC)}

  { usuario.map  ( (usuario) => (
    
                  <tr key={ usuario.id_cita}>
                  <td> { usuario.id_cita}</td>
                  <td> { usuario.nombreCita}</td>
                  <td> { usuario.fechaCita}</td>
                  <td> { usuario.horaCita}</td>
                  <td> { usuario.tipoCita}</td>
                  <td> { usuario.sintomas}</td>
                  </tr>
  ))}
</tbody> 
</table>

                </div>
            </div>


        <div className='botones4'>

        <img src='https://webstockreview.net/images/clipart-doctor-medical-doctor-4.png' alt='' className='imagen-png'/>

        <Link to={'/'}><button className='cerrar'>Cerrar Sesión</button></Link>

        </div>

        </div>

    )

}

export default CompMenuDoctor