//importamos el modelo 

import EmpleadoModel from "../modelos/empleadoModelo.js"
import PacientesModel from "../modelos/pacienteModelo.js"

//** Métodos para la CRUD */


//Mostrar todos los registros
export const getAllEmpleados = async (req, res) => {

    try {
       const empleados = await EmpleadoModel.findAll()
       res.json(empleados)
    } catch (error) {
       res.json( {message: error.message})
    }
}



//Mostrar un registro

export  const getEmpleado = async (req,res) => {

    try {
        const empleado = await EmpleadoModel.findAll({
            where:{ 
                idEmpleado:req.params.idEmpleado }

        })
        res.json(empleado[0])
    } catch (error) {
        res.json( {message: error.message})
    }

}



export  const login = async (req,res) => {

    try {
        const { correo, contrasena } = req.body; 
        const empleado = await EmpleadoModel.findAll({
            where:{ 
                correoEmpleado:correo,
                contrasenaEmpleado:contrasena
            }
        })

        const paciente = await PacientesModel.findAll({
            where:{
                correoPaciente:correo,
                contrasenaPaciente:contrasena
            }
        })
        //res.json(usuario)
        if (empleado.length > 0) {
            // Usuario autenticado con éxito
            res.json({ 
                message: 'INGRESO EMPLEADO',
                documento: empleado[0].idEmpleado,
                nombre: empleado[0].nombreEmpleado,
                cargo: empleado[0].especializacion,
                rol: empleado[0].codigoRolFK,
                
            });
            console.log("INGRESO EMPLEADO EXITOSO"); 
        }else if(paciente.length > 0) {

            res.json({ 
                
                message: 'INGRESO PACIENTE',
                nombreP: paciente[0].nombrePaciente,
                
            });
            console.log("INGRESO PACIENTE EXITOSO"); 

          } else{
            // Credenciales incorrectas
            res.json({ 
                message: 'DENEGADO', 
            });
            console.log("INGRESO ERRONEO"); 
          }
    } catch (error) {
        res.json( {message: error.message})
    }

}

//Crear un registro

export const crearEmpleado = async (req,res) => {
    try {
        await EmpleadoModel.create(req.body)
        res.json({
            "message":"Empleado creado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }

}

//Actualizar un registro

export const actualizarEmpleado = async (req,res) => {

    try {
        await EmpleadoModel.update(req.body, {
            where: { idEmpleado: req.params.idEmpleado }
        })
        res.json({
            "message":"Empleado actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Eliminar un registro


export const deleteEmpleado = async (req, res) => {

    try {

        await EmpleadoModel.destroy({
            where: { idEmpleado: req.params.idEmpleado }
        })
        res.json({
            "message":"Empleado eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }

}

