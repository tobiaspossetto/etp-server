import console from 'console'
import { Request, Response } from 'express'
import ExposicionesService from '../services/exposiciones.service'
export default class ExposicionesController {
  static async crearExposicion (req: Request, res: Response) {
    try {
      if (!req.body.nombre && !req.body.descripcion && !req.body.idiomasDisponibles && !req.body.horas) {
        return res.status(400).json({ error: true, message: 'Faltan campos o estan incorrectos' })
      }
      console.log(req.file?.path)
      const exposicion = { ...req.body, audioSrc: req.file?.path }
      exposicion.idiomasDisponibles = exposicion.idiomasDisponibles.split(',')
      const result = await ExposicionesService.saveExposicion(exposicion)
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

  static async updateExposicion (req: Request, res: Response) {
    try {
      if (!req.body.nombre && !req.body.descripcion && !req.body.idiomasDisponibles && !req.body.horas) {
        return res.status(400).json({ error: true, message: 'Faltan campos o estan incorrectos' })
      }
      const id = req.params.id
      const result = await ExposicionesService.updateExposicion(req.body, id)
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
