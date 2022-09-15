import console from 'console'
import { Request, Response } from 'express'
import AdminService from '../services/admin.service'
export default class AdminController {
  static async Login (req: Request, res: Response) {
    try {
      if (!req.body.username && !req.body.password) {
        return res.status(400).json({ error: true, message: 'Faltan campos o estan incorrectos' })
      }
      const result = await AdminService.Login(req.body)
      if (result.error) {
        return res.status(400).json(result)
      } else {
        console.log(result)
        return res.status(200).json({ error: false, data: result.data })
      }
    } catch (error) {
      return res.status(500).json({ error: true, message: 'Error del servidor' })
    }
  }
}
