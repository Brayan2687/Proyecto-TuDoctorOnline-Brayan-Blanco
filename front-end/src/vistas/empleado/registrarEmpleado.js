import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../../estilos/registrarEmpleado.css'

const URI = 'http://localhost:8000/empleado/'

const CompCrearEmpleado = () => {
    const [idEmpleado,setIdEmpleado] = useState('')
    const [nombreEmpleado, setNombreEmpleado] = useState('')
    const [estadoEmpleado] = useState('Activo')
    const [especializacion, setEspecializacion] = useState('')
    const [turno,setTurno] = useState('')
    const [turnoInicio,setTurnoInicio] = useState('')
    const [turnoFin,setTurnoFin] = useState('')
    const [correoEmpleado,setCorreoEmpleado] = useState('')
    const [contrasenaEmpleado,setContrasenaEmpleado] = useState('')
    const [codigoRolFK] = useState('2')
    const navigate = useNavigate()
    //Procedimiento guardar
    const crearEmpleado = async (e) => {
        e.preventDefault()
        await axios.post(URI, {idEmpleado: idEmpleado,nombreEmpleado: nombreEmpleado,estadoEmpleado:estadoEmpleado, especializacion: especializacion, 
            diasDiponibles: turno, turnoInicio: turnoInicio, turnoFin: turnoFin,correoEmpleado: correoEmpleado,
            contrasenaEmpleado: contrasenaEmpleado,codigoRolFK: codigoRolFK })
            alert('Empleado Registrado Correctamente')
            navigate('/menuGerente')
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
        <form className='formulario2' onSubmit={crearEmpleado}>


            <label>DNI</label>
            <input 
            placeholder="Digite numero identificación"
            value={idEmpleado} 
            onChange={ (e)=> setIdEmpleado(e.target.value)} 
            type='number' 
            required
            />
            <label>Nombre Completo</label>
            <input 
            placeholder="Digite su nombre completo"
            value={nombreEmpleado} 
            onChange={ (e) => setNombreEmpleado(e.target.value)} 
            type='text' 
            required
            />
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
            <label>Correo</label>
            <input 
            placeholder="Digite su correo"
            value={correoEmpleado} 
            onChange={ (e) => setCorreoEmpleado(e.target.value)} 
            type='email'
            required
            />
            <label>Contraseña</label>
            <input 
            value={contrasenaEmpleado} 
            onChange={ (e) => setContrasenaEmpleado(e.target.value)} 
            type='password'
            required
            placeholder="Digite su contraseña"
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

export default CompCrearEmpleado