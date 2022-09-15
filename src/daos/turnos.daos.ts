import { TurnosModel } from '../models/turnos.model'
export default class TurnosDaos {
  static async saveTurno (data:string) {
    try {
      const turno = await TurnosModel.create(data)
      return { error: false, data: turno.id }
    } catch (error) {
      console.error(error)
      return { error: true, message: 'ocurrio un error al guardar en la dase de datos' }
    }
  }
}
