import express from 'express'
import { crearCita, deleteCita, getAllCitas, getUsuarioPorNombre, getCitaPorNombre, reservacion } from '../controllers/controladorCita.js'
const router = express.Router()


router.post('/', crearCita)
router.delete('/:id_cita', deleteCita)
router.get('/', getAllCitas)
router.get('/:nombreCita',getUsuarioPorNombre)
router.get('/empleado/:tipoCita',getCitaPorNombre)
router.post('/tipo',reservacion)


export default router   