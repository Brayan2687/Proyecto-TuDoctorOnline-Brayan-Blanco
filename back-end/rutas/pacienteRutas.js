import express from 'express'
import crearPaciente from './../controllers/controladorPaciente.js'

const router = express.Router()


router.post('/', crearPaciente)



export default router