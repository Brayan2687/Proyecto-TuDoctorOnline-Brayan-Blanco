//Importamos la conexion a la base de datos
import db from "../bd/bd.js";

import { DataTypes } from "sequelize";

    const EmpleadoModel = db.define('Empleado', {
        idEmpleado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
        nombreEmpleado: {type: DataTypes.STRING},
        estadoEmpleado: {type: DataTypes.STRING},
        especializacion: {type: DataTypes.STRING},
        diasDiponibles: {type: DataTypes.STRING},
        turnoInicio: {type: DataTypes.TIME},
        turnoFin: {type: DataTypes.TIME},
        correoEmpleado: {type: DataTypes.STRING},
        contrasenaEmpleado: {type: DataTypes.STRING},
        codigoRolFK: {type: DataTypes.INTEGER, 
            foreignkey : true,
        },
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: "Empleado"
    }
    )

export default EmpleadoModel