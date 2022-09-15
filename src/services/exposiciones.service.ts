import ExposicionesDaos from '../daos/exposiciones.daos'
export default class ExposicionesService {
  static async saveExposicion (data:any) {
    try {
      const res = await ExposicionesDaos.saveExposicion(data)
      return res
    } catch (error) {
      return { error: true, message: 'Ocurrio un error haciendo el login' }
    }
  }

  static async updateExposicion (data:any, id:string) {
    try {
      const exposicionToUpdate = await ExposicionesDaos.getById(id)
      if (exposicionToUpdate.error) {
        return exposicionToUpdate
      }
      const result = await ExposicionesDaos.updateExposicion(data, exposicionToUpdate.data._id)
      return result
    } catch (error) {
      console.error(error)
      return {
        error: true,
        data: { message: 'Ocurrio un error intentando actualizar la exposicion' }
      }
    }
  }
}
