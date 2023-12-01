import './../../estilos/cita.css'
import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const URI = 'http://localhost:8000/comparacion/'
const URI2 = 'http://localhost:8000/empleado/'
const URI3 = 'http://localhost:8000/cita/'
const URI4 = 'http://localhost:8000/cita/tipo'

const CompCita = () => {
    
  const [id_cita] = useState('')
  const [dni, setdni] = useState('')
  const [eps, seteps] = useState('')
  const [nombreCita,setNombreCita] = useState('')
  const [fechaCita,setFechaCita] = useState('')
  const [horaCita,setHoraCita] = useState('')
  const [tipoCita,setTipoCita] = useState('')
  const [sintomas,setSintomas] = useState('')
  const navigate = useNavigate()
  //Procedimiento guardar

  const [empleados, setEmpleados] = useState([])
  useEffect( ()=>{
      getEmpleados()
  },[])

  //Procedimiento para mostrar todos los productos
  const getEmpleados = async () => {
      const res = await axios.get(URI2)
      setEmpleados(res.data)
  }
  
    //Procedimiento guardar
    const comparacion = async (e) => {
      e.preventDefault();
  
      // Validación de la fecha
      const fechaActual = new Date();
      const fechaCitaSeleccionada = new Date(fechaCita);
  
      if (fechaCitaSeleccionada < fechaActual) {
        alert("La fecha de la cita no puede ser anterior a la fecha actual.");
        return;
      }
      
      const response = await axios.post(URI, { dni: dni, eps: eps });
      const acceso = response.data.message;
  

      const res = await axios.post(URI4, { fechaCita: fechaCita, horaCita: horaCita,tipoCita:tipoCita });
      const acces = res.data.message;

      console.log(`${acces}`)
        
        if (acceso === "AUTORIZADO") {

          e.preventDefault();

          alert("Cita Agendada Correctamente ");


          await axios.post(URI3, {
            id_cita: id_cita,
            dni_cita: dni,
            numeroIPS: eps,
            nombreCita: nombreCita,
            fechaCita: fechaCita,
            horaCita: horaCita,
            tipoCita: tipoCita,
            sintomas: sintomas,
          });
          navigate('/menuPaciente');

        } else if (acceso === "DENEGADO") {
          alert("Error de acceso");
        }
  
      // Resto del código de comparacion...
    

    };

    return(
   
      

        <div>
        <div className='header'>
        <h1 className='titulo'>
        TuDoctorOnline
        </h1>
        </div>
        <div className='body2'>

        <div className='fondoForm'>
            <h1>Nueva Cita</h1>
        <form className='formulario' onSubmit={comparacion} >

        
            <label>DNI</label>
            <input id='' type='number' placeholder='Numero de identificación' 
              className="form-control input_user"              
              value={dni}
              onChange={(e) => setdni(e.target.value)} required/>            
            <label>Numero IPS</label>
            <input id='' type='number' placeholder='Digite la aprobacion IPS '
            className="form-control input_user"              
            value={eps}
            onChange={(e) => seteps(e.target.value)} required/>
            <label>Nombre</label>
            <input id='' type='text' placeholder='Digite su nombre completo'
            className="form-control input_user"              
            value={nombreCita}
            onChange={(e) => setNombreCita(e.target.value)} required/>
            <label>Fecha de cita</label>
            <input id='' type='date' placeholder='Digite la aprobacion IPS '
            className="form-control input_user"              
            value={fechaCita}
            onChange={(e) => setFechaCita(e.target.value)} required/>
            <label>Hora de cita</label>
            <input  id='' type='time' placeholder='Digite la aprobacion IPS '
            className="form-control input_user"              
            value={horaCita}
            onChange={(e) => setHoraCita(e.target.value)} required/>
            <label>Tipo de cita</label>
            <select   id=''
            className="form-control input_user"              
            value={tipoCita}
            onChange={(e) => setTipoCita(e.target.value)} required>            
            <option value="Selecionar">Selecionar...</option>
            { empleados.map ( (empleados) => (
            <option>{ empleados.nombreEmpleado}-{empleados.especializacion}</option>
            ))}
            </select>
            <label className='s' >Sintomas</label>
            <textarea   id='' type='text'
            className="form-control input_user"              
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)} required name="w3review" rows="3" cols="30" maxlength="250" placeholder='Describa sus sintomas'></textarea>

            <button className='button1' type='submit'>Continuar</button>

        </form>
        <Link to={'/menuPaciente'}><button className='button4' type='submit'>Regresar</button></Link>



        </div>
        </div>
        </div>
    )


}

export default CompCita;