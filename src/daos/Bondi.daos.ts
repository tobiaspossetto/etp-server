import { BondiModel } from '../models/Bondi.model'
import { validPassword } from '../validPassword'
export default class BondiDaos {
  static async findByLineAndUnit (lineName: string, unitName:any) {
    try {
      const bondi = await BondiModel.findOne({ lineName, unitName })
      if (bondi) {
        return { error: false, data: bondi }
      } else {
        return { error: true, message: 'no encontrado' }
      }
    } catch (error) {
      console.error(error)
      return { error: true, message: 'ocurrio un error al consultar en la dase de datos' }
    }
  }

  static async checkPassword (id:string, password:string) {
    try {
      const bondiPassword = await BondiModel.findById(id)
      if (bondiPassword) {
        const result = await validPassword(password, bondiPassword.password)
        if (result) {
          return { error: false, message: 'password correcto' }
        } else {
          return { error: true, message: 'password incorrect' }
        }
      } else {
        return { error: true, message: 'ocurrio un error al consultar en la dase de datos' }
      }
    } catch (error) {
      console.error(error)
      return { error: true, message: 'ocurrio un error al consultar en la dase de datos' }
    }
  }
}
