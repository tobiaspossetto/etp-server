import express from 'express'
// import { encryptPassword } from '../encryptPassword'
// import { BondiModel } from '../models/Bondi.model'
import BondiController from '../controllers/Bondi.ctrl'
import { verifyToken } from '../middleware/jwt'
const Router = express.Router()

Router.post('/coordenadas', verifyToken, BondiController.sendCoordenadas)
Router.post('/login', BondiController.Login)

// SIGN UP -- SOLO SE USÓ DESDE EL SERVIDOR PARA GENERAR

// Router.post('/crearBondi', async (req: Request, res: Response) => {
//   const bondi = req.body
//   try {
//     bondi.password = await encryptPassword(bondi.password)
//     const result = await BondiModel.create(bondi)
//     res.json({ error: false, message: 'Bondi creado', data: result.id })
//   } catch (error) {
//     console.error(error)
//     res.json({ error: true, message: 'ocurrio un error al crear' })
//   }
// })

module.exports = Router
