import express from "express";
import cors from "cors";
import bd from "./bd/bd.js";
import bodyParser from 'body-parser';
import PacienteRutas from './rutas/pacienteRutas.js'
import ComparacionRutas from "./rutas/comparacionRutas.js";
import EmpleadoRutas from "./rutas/empleadoRutas.js"
import loginRutas from "./rutas/loginRutas.js"
import citaRutas from "./rutas/citaRutas.js"
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/paciente',PacienteRutas)
app.use('/comparacion',ComparacionRutas)
app.use('/empleado',EmpleadoRutas)
app.use('/login',loginRutas)
app.use('/cita',citaRutas)

try{
    await bd.authenticate()
    console.log('Conexion exitosa a la base de datos')

}catch (error){

    console.log(`el error de conexion es de: ${error}`)

}


app.listen(8000, ()=>{
    console.log('El server esta corriendo en http://localhost:8000')
});