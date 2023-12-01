import express from 'express'
import { login } from '../controllers/controladorEmpleado.js'
const router = express.Router()

router.post('/', login)

export default router