import bd from '../bd/bd.js'
import {  DataTypes  } from 'sequelize'

const PacientesModel = bd.define('Pacientes', {
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    nombrePaciente: {type: DataTypes.STRING},
    direccionPaciente: {type: DataTypes.STRING},
    telefonoPaciente: {type: DataTypes.INTEGER},
    sexoPaciente: {type: DataTypes.STRING},
    estadoCivil: {type: DataTypes.STRING},
    correoPaciente: {type: DataTypes.STRING},
    contrasenaPaciente: {type: DataTypes.STRING},
    fechaNacimientoPaciente: {type: DataTypes.DATE},
    rhPaciente: {type: DataTypes.STRING},
    eps: {type: DataTypes.INTEGER},
},
{
        timestamps: false,
        freezeTableName: true,
        tableName: "Pacientes"
})

export default PacientesModel;