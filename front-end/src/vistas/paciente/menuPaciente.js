import './../../estilos/menuPaciente.css'
import { useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import { p } from '../login/iniciarSesion'
import axios from 'axios'



const URI = 'http://localhost:8000/cita/'
    

const CompMenuPaciente = () =>{

     
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




    //Procedimiento para mostrar todos los productos
    const getCitas = async () => {
        const res = await axios.get(URI)
        setUsuarios(res.data)
    }
    
    const deleteCita = async (id_cita) => {
        await axios.delete(`${URI}${id_cita}`)
        getCitas()
        alert('Registro Eliminado Correctamente')

    }

    
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
                <br/>

                Todos Tus Citas:
            </h2>


            </div>
            <div className='contenedor-funcion'>
            <h1>
                Bienvenido {cita} 
            </h1>


            </div>

            <div className='contenedor-texto'>
                <div className='formulario8'>

                <table className="styled-table1"> 
        
<thead> 
  <tr> 
    <th>#</th> 
    <th>Su DNI</th>
    <th>Nombre</th>
    <th>Fecha Cita</th> 
    <th>Hora Cita</th>
    <th>Tipo Cita</th>
    <th>Cancelar</th>
  </tr> 
</thead> 
  <tbody> 


{ usuario.map ( (usuario) => (
    
    <tr key={ usuario.id_cita}>
    <td> { usuario.id_cita}</td>
    <td> { usuario.dni_cita}</td>
    <td> { usuario.nombreCita}</td>
    <td> { usuario.fechaCita}</td>
    <td> { usuario.horaCita}</td>
    <td> { usuario.tipoCita}</td>
    <td><button onClick={ ()=>deleteCita(usuario.id_cita)} className='button16'>Cancelar</button></td>
    </tr>
  
))}
</tbody> 
</table>

                </div>
            </div>


        <div className='botones2'>
        <Link to={'/cita'}><button className='s'>Agendar Cita</button></Link>
        <Link to={'/listAgendaPaciente'}><button className='doctor'>Agendas Disponibles</button></Link>
        <Link to={'/'}><button className='cerrar'>Cerrar Sesión</button></Link>
        </div>

        <div>

    </div>



        </div>

    )

  }


localStorage.removeItem("cita")

export default CompMenuPaciente