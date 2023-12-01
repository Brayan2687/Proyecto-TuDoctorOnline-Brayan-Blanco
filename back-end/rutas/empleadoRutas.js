import express from 'express'
import { actualizarEmpleado, crearEmpleado, deleteEmpleado, getAllEmpleados, getEmpleado } from '../controllers/controladorEmpleado.js'
const router = express.Router()

router.get('/', getAllEmpleados) 
router.get('/:idEmpleado', getEmpleado)
router.post('/', crearEmpleado)
router.put('/:idEmpleado', actualizarEmpleado)
router.delete('/:idEmpleado', deleteEmpleado)



export default router   