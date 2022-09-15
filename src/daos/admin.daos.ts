import { AdminModel } from '../models/admin.model'
import { validPassword } from '../validPassword'
export default class AdminDaos {
  static async findUser (username:string) {
    try {
      const user = await AdminModel.findOne({ username })
      if (user) {
        return { error: false, data: user }
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
      const bondiPassword = await AdminModel.findById(id)
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
