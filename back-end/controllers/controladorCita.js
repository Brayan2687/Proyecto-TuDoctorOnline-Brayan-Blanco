import CitasModelo from "../modelos/citaModelo.js"






export  const reservacion = async (req,res) => {

    try {
        const { fechaCita, horaCita,tipoCita } = req.body; 
        const citas = await CitasModelo.findAll({
            where:{ 


                fechaCita:fechaCita,
                horaCita:horaCita,
                tipoCita:tipoCita

            }
        })

        //res.json(usuario)
        if (citas.length > 0) {
            // Usuario autenticado con éxito
            res.json({ 

                message: 'CANCELADA',
                id_cita: citas[0].id_cita,
                
            });
            console.log("INGRESO EMPLEADO ERRONEO"); 
        }else{
            // Credenciales incorrectas
            res.json({ 
                message: 'ACEPTADO', 
            });
            console.log("CITA ACEPTADA"); 
          }
    } catch (error) {
        res.json( {message: error.message})
    }

}



//** Métodos para la CRUD */


//Mostrar todos los registros
export const getAllCitas = async (req, res) => {

    try {
       const citas = await CitasModelo.findAll()
       res.json(citas)
    } catch (error) {
       res.json( {message: error.message})
    }
}

//Mostrar un registro


export const getUsuarioPorNombre = async (req, res) => {
    try {
        const { nombreCita } = req.params;

        // Consulta de usuarios por nombre
        const usuarios = await CitasModelo.findAll({
            where: { nombreCita },
        });

        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios', message: error.message });
    }
}

export const getCitaPorNombre = async (req, res) => {
    try {
        const { tipoCita } = req.params;

        // Consulta de usuarios por nombre
        const usuarios = await CitasModelo.findAll({
            where: { tipoCita },
        });

        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios', message: error.message });
    }
}

//Crear un registro

export const crearCita = async (req,res) => {
    try {
        await CitasModelo.create(req.body)
        res.json({
            "message":"Cita creada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }

}


//Eliminar un registro


export const deleteCita = async (req, res) => {

    try {

        await CitasModelo.destroy({
            where: { id_cita: req.params.id_cita }
        })
        res.json({
            "message":"cita eliminada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message})
    }

}

