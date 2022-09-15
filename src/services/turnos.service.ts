import TurnosDaos from '../daos/turnos.daos'
export default class TurnosService {
  static async saveTurno (data:any) {
    try {
      const res = await TurnosDaos.saveTurno(data)
      return res
    } catch (error) {
      return { error: true, message: 'Ocurrio un error haciendo el login' }
    }
  }
}
