//importamos el modelo 

import PacientesModel from "../modelos/pacienteModelo.js"


//** Métodos para la CRUD */





export  const ComparacionDatos = async (req,res) => {

    try {
        const { dni, eps } = req.body; 
        const paciente = await PacientesModel.findAll({
            where:{ 
                dni:dni,
                eps:eps
            }

        })
        //res.json(usuario)
        if (paciente.length > 0) {
            // Usuario autenticado con éxito
            res.json({ 
                message: 'AUTORIZADO',
                dni: paciente[0].dni,
            });
            console.log("INGRESO EXITOSO"); 
          } else {
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

const crearPaciente = async (req,res) => {
    try {
        await PacientesModel.create(req.body)
        res.json({
            "message":"¡Usuario registrado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }

}

export default crearPaciente
