import express from 'express'
import { ComparacionDatos } from './../controllers/controladorPaciente.js';
const router = express.Router()

router.post('/', ComparacionDatos)

export default router