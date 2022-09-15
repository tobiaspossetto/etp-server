import { ExposicionesModel } from '../models/exposiciones.model'
export default class ExposicionesDaos {
  static async saveExposicion (data:string) {
    try {
      const expo = await ExposicionesModel.create(data)
      return { error: false, data: expo.id }
    } catch (error) {
      console.error(error)
      return { error: true, message: 'ocurrio un error al guardar en la dase de datos' }
    }
  }

  static async getById (id:string) {
    try {
      const product:any = await ExposicionesModel.findById(id)
      if (product == null) {
        return {
          error: true,
          data: { message: 'El producto no se encontro' }
        }
      } else {
        return {
          error: false,
          data: product
        }
      }
    } catch (error) {
      console.error(error)
      return {
        error: true,
        data: { message: 'Ocurrio un error, asegurese de que el id es correcto' }
      }
    }
  }

  static async updateExposicion (newDatos:any, id:string) {
    try {
      const res = await ExposicionesModel.findOneAndUpdate({ _id: id }, { $set: { ...newDatos } })
      if (res == null) {
        console.error(res)
        return {
          error: true,
          data: { message: 'El producto no se pudo actualizar' }
        }
      } else {
        return {
          error: false,
          data: { id: res._id }
        }
      }
    } catch (error) {
      console.error(error)
      return {
        error: true,
        data: { message: 'Ocurrio un error actualizando el producto en la base de datos' }
      }
    }
  }
}
