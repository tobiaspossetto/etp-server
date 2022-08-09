import console from 'console'
import { Request, Response } from 'express'
import BondiService from '../services/Bondi.service'
export default class BondiController {
  static async Login (req: Request, res: Response) {
    try {
      if (!req.body.lineName && !req.body.unitName && !req.body.password) {
        return res.status(400).json({ error: true, message: 'Faltan campos o estan incorrectos' })
      }
      const result = await BondiService.Login(req.body)
      if (result.error) {
        return res.status(400).json(result)
      } else {
        console.log(result)
        return res.json({ error: false, data: result.data }).status(200)
      }
    } catch (error) {
      return res.status(500).json({ error: true, message: 'Error del servidor' })
    }
  }

  static async sendCoordenadas (req: Request, res: Response) {
    try {
      if (!req.body.coord) {
        return res.status(400).json({ error: true, message: 'Hay un dato incorrecto' })
      }
      // @ts-ignore
      req.io.emit('COORDENADAS', { lineName: req.user.lineName, unitName: req.user.unit, coord: req.body.coord })
      console.log(req.user.lineName, req.user.unit, req.body.coord)
      res.status(200).json({ error: false, message: 'Coordenadas enviadas' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: true, message: 'Error del servidor' })
    }
  }
}
