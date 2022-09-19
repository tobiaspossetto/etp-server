import express, { Request, Response } from 'express'
import { encryptPassword } from '../encryptPassword'
import { AdminModel } from '../models/admin.model'
import AdminController from '../controllers/admin.ctrl'
import TurnosController from '../controllers/turnos.ctrl'
import ExposicionesController from '../controllers/exposiciones.ctrl'
import { verifyToken } from '../middleware/jwt'
import { multerCheck, upload } from '../middleware/multer'
import { exposicionesSchema, turnoSchema } from '../middleware/validator/schemas/RequestsSchemas'
import { validateRequest } from '../middleware/validator/validator'

const Router = express.Router()

Router.post('/login', AdminController.Login)

// SIGN UP -- SOLO SE USÓ DESDE EL SERVIDOR PARA GENERAR

Router.post('/crearAdmin', async (req: Request, res: Response) => {
  const admin = req.body
  try {
    admin.password = await encryptPassword(admin.password)
    const result = await AdminModel.create(admin)
    res.json({ error: false, message: 'Admin creado', data: result.id })
  } catch (error) {
    console.error(error)
    res.json({ error: true, message: 'ocurrio un error al crear' })
  }
})

// TURNOS

Router.post('/crearTurno', turnoSchema, validateRequest, TurnosController.saveTurno)

// EXPOSICIONES SOLO ADMIN

Router.post('/crearExposicion', verifyToken, upload.single('audio'), multerCheck, exposicionesSchema, validateRequest, ExposicionesController.crearExposicion)
Router.put('/crearExposicion/:id', verifyToken, ExposicionesController.updateExposicion)

module.exports = Router
