import console from 'console'
import { Request, Response } from 'express'
import TurnosService from '../services/turnos.service'
export default class TurnosController {
  static async saveTurno (req: Request, res: Response) {
    try {
      if (!req.body.nombreDelTitular && !req.body.cantidadPersonas && !req.body.idioma && !req.body.fecha) {
        return res.status(400).json({ error: true, message: 'Faltan campos o estan incorrectos' })
      }
      const result = await TurnosService.saveTurno(req.body)
      if (result.error) {
        return res.status(400).json(result)
      } else {
        console.log(result)
        return res.status(200).json(result)
      }
    } catch (error) {
      return res.status(500).json({ error: true, message: 'Error del servidor' })
    }
  }
}
