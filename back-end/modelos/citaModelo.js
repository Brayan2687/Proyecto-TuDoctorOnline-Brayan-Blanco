//Importamos la conexion a la base de datos
import db from "../bd/bd.js";

import { DataTypes } from "sequelize";

    const CitasModelo = db.define('Citas', {
        id_cita: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
          dni_cita: {type: DataTypes.INTEGER},
          numeroIPS: {type: DataTypes.INTEGER},
          nombreCita: {type: DataTypes.STRING},
          fechaCita: {type: DataTypes.DATE},
          horaCita: {type: DataTypes.TIME},
          tipoCita: {type: DataTypes.STRING},
          sintomas: {type: DataTypes.STRING},
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: "Citas"
    }
    )

export default CitasModelo