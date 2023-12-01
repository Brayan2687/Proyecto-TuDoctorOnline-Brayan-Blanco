import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate ,useParams } from "react-router-dom"
import '../../estilos/registrarEmpleado.css'

const URI = 'http://localhost:8000/empleado/'

const CompActualizarEmpleado = () => {
    const [nombreEmpleado, setNombreEmpleado] = useState('')
    const [estadoEmpleado, setEstadoEmpleado] = useState('Activo')
    const [especializacion, setEspecializacion] = useState('')
    const [turno,setTurno] = useState('')
    const [turnoInicio,setTurnoInicio] = useState('')
    const [turnoFin,setTurnoFin] = useState('')
    const navigate = useNavigate()

    const {idEmpleado} = useParams()

    

    //Procedimiento guardar
    const actualizar = async (e) => {
        e.preventDefault()
        await axios.put(URI+idEmpleado,{nombreEmpleado: nombreEmpleado, estadoEmpleado: estadoEmpleado, 
            especializacion: especializacion, turno: turno, 
            turnoInicio: turnoInicio, turnoFin: turnoFin})
        navigate('/listAgenda')

    }
    useEffect( ()=>{
        getEmpleadoById()
    },[])

    const getEmpleadoById = async () => {
            const res = await axios.get(URI+idEmpleado)
            setNombreEmpleado(res.data.nombreEmpleado)
            setEstadoEmpleado(res.data.estadoEmpleado)
            setEspecializacion(res.data.especializacion)
            setTurno(res.data.turno)
            setTurnoInicio(res.data.turnoInicio)
            setTurnoFin(res.data.turnoFin)
            
    }
    return (
        

        
        <div>
        <div className='header'>
        <h1 className='titulo'>
        TuDoctorOnline
        </h1>
        </div>
        <div className='body4'>

        <div className='fondoForm2'>
            <h1>Ingrese sus datos porfavor</h1>
        <form className='formulario2' onSubmit={actualizar}>


            <label>Nombre Completo</label>
            <input 
            placeholder="Digite su nombre completo"
            value={nombreEmpleado} 
            onChange={ (e) => setNombreEmpleado(e.target.value)} 
            type='text' 
            required
            />
            <label>DNI</label>
            <select 
            placeholder="Digite numero identificación"
            value={estadoEmpleado} 
            onChange={ (e)=> setEstadoEmpleado(e.target.value)} 
            type='text' 
            required
            >
            <option>
                Activo
            </option>
            <option>
                Inactivo
            </option>
            </select>
            <label>Especializacion</label>
            <select 
            value={especializacion} 
            onChange={ (e) => setEspecializacion(e.target.value)} 
            type='text'
            required 
            > 
            <option>
                    Selecionar...
            </option>
            <option>
                    General
            </option>
            <option>
                
                    Sexolog(@)

            </option>
            <option>
                
                    Odontolog(@)

            </option>
            <option>
                
                    Pediatra

            </option>
            <option>
                
                    Cardiolog(@)

            </option>
            <option>
                
                Dermatolog(@)

            </option>
            </select>
            <label>Disponibilidad</label>
            <select 
            value={turno} 
            onChange={ (e) => setTurno(e.target.value)} 
            type='text'
            required 
            >
            <option>
                    Selecionar...
            </option>
            <option>
                    Lunes A Viernes
            </option>
            <option>
                
                    Fines De Semana

            </option>
            <option>
                
                    Dia De Por Medio

            </option>

            </select>
            <div className="hora">
            <label>Hora Inicio</label>
            <input className="opcion"
            value={turnoInicio} 
            onChange={ (e) => setTurnoInicio(e.target.value)} 
            type='time' required
            />
            <label>Hora Final</label>
            <input className="opcion"
            value={turnoFin} 
            onChange={ (e) => setTurnoFin(e.target.value)} 
            type='time' required
            />
            </div>
            <button type='submit'  className='button5'>Registrar</button>
        </form>
        <Link to={'/menuGerente'}><button  className='button20'>regresar</button></Link>
        </div>

        </div>

        </div>
        
    )

} 

export default CompActualizarEmpleado