import axios from "axios"
import { useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import './../../estilos/registrarPaciente.css'
import { getRandomInt } from "./Math/math.js"

const URI = 'http://localhost:8000/paciente/'

const CompCrearPaciente = () => {



    const numIPS = getRandomInt(100,1000)

    const [dni,setDni] = useState('')
    const [nombrePaciente, setNombrePaciente] = useState('')
    const [direccionPaciente, setDireccionPaciente] = useState('')
    const [telefonoPaciente,setTelefonoPaciente] = useState('')
    const [sexoPaciente,setSexoPaciente] = useState('')
    const [estadoCivil, setEstadoCivil] = useState('')
    const [correoPaciente, setCorreoPaciente] = useState('')
    const [contrasenaPaciente, setContrasenaPaciente] = useState('')
    const [fechaNacimientoPaciente, setFechaNacimientoPaciente] = useState('')
    const [rhPaciente,setRhPaciente] = useState('')
    const [eps] = useState(numIPS)
    const navigate = useNavigate()



    //Procedimiento guardar
    const crearPaciente = async (e) => {
        
        const autorizacion = eps 

        e.preventDefault()
        await axios.post(URI, {dni: dni,nombrePaciente: nombrePaciente, direccionPaciente: direccionPaciente, 
            telefonoPaciente: telefonoPaciente, sexoPaciente: sexoPaciente,estadoCivil:estadoCivil,correoPaciente:correoPaciente,contrasenaPaciente:contrasenaPaciente, fechaNacimientoPaciente: fechaNacimientoPaciente,rhPaciente: rhPaciente,
            eps: eps})

            alert('Se registro correctamente');
            alert('¡¡Información Importante!! \n\n Pronto recibiras tu codigo de autorización de IPS\n\n el cual Sirve para poder realizar tus citas');
            alert('Tu Codigo Es:'+autorizacion);

            navigate('/')
    }

    return (
        

        <div>
        <div className='header'>
        <h1 className='titulo'>
        TuDoctorOnline
        </h1>
        </div>
        <div className='body3'>

        <div className='fondoForm1'>
            <h1>Ingrese sus datos porfavor</h1>
        <form className='formulario1' onSubmit={crearPaciente}>



            <label>DNI</label>
            <input 
            placeholder="Digite numero identificación"
            value={dni} 
            onChange={ (e)=> setDni(e.target.value)} 
            type='number' 
            required
            
            />
            <label>Nombre</label>
            <input 
            placeholder="Digite su nombre completo"
            value={nombrePaciente} 
            onChange={ (e) => setNombrePaciente(e.target.value)} 
            type='text' 
            required
            />
            <label>Numero</label>
            <input 
            placeholder="Digite numero de telefono"
            value={telefonoPaciente} 
            onChange={ (e) => setTelefonoPaciente(e.target.value)} 
            type='number'
            required 
            />
            <label>Dirección</label>
            <input 
            placeholder="Digite su dirección"
            value={direccionPaciente} 
            onChange={ (e) => setDireccionPaciente(e.target.value)} 
            type='text'
            required 
            />
            <label>Sexo</label>
            <select className="opcion"
            value={sexoPaciente} 
            onChange={ (e) => setSexoPaciente(e.target.value)} 
            type='text' 
            >
            <option >
            Seleccionar...
            </option>
            <option >
                Masculino
            </option>
            <option >
                Femenino
            </option>
            
            </select>
            <label>Estado Civil</label>
            <select className="opcion"
            value={estadoCivil} 
            onChange={ (e) => setEstadoCivil(e.target.value)} 
            type='texto' 
            >
            <option >
            Seleccionar...
            </option>
            <option >
            casado(a)
            </option>
            <option >
            soltero(a)
            </option>
            <option >
            divorciado(a)
            </option>
            <option>
            viudo(a)
            </option>
            </select>
            <label>Correo</label>
            <input 
            placeholder="Digite su correo"
            value={correoPaciente} 
            onChange={ (e) => setCorreoPaciente(e.target.value)} 
            type='email'
            required
            />
            <label>Contraseña</label>
            <input 
            placeholder="Digite su contraseña"
            value={contrasenaPaciente} 
            onChange={ (e) => setContrasenaPaciente(e.target.value)} 
            type='password'
            required
            />
            <label>Fecha nacimiento</label>
            <input 
            value={fechaNacimientoPaciente} 
            onChange={ (e) => setFechaNacimientoPaciente(e.target.value)} 
            type='date'
            required
            />
            <label>RH</label>
            <select 
            value={rhPaciente} 
            onChange={ (e) => setRhPaciente(e.target.value)} 
            type='text' 
            className="opcion"
            >
           
            <option >
            Seleccionar...
            </option>
            <option >
            A -
            </option>
            <option >
            B +
            </option>
            <option >
            B -
            </option>
            <option >
            AB +
            </option>
            <option >
            AB -
            </option>
            <option >
            O +
            </option>
            <option >
            O -
            </option>
            </select>
            <button type='submit'  className='button2'>Registrar</button>
        </form>
            <Link to={'/'}><button type='submit'  className='button10'>Regresar</button></Link>
        </div>

        </div>

        </div>
        
    )

} 

export default CompCrearPaciente