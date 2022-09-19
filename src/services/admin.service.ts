import AdminDaos from '../daos/admin.daos'
import { createToken } from '../middleware/jwt'
export default class AdminService {
  static async Login (data:any) {
    try {
      const query:any = await AdminDaos.findUser(data.username)
      if (query.error) {
        return { error: true, message: query.message }
      } else {
        const checkPassword = await AdminDaos.checkPassword(query.data.id, data.password)
        if (checkPassword.error) {
          return { error: true, message: checkPassword.message }
        } else {
          const token = createToken(query.data._id)

          return { error: false, data: { token, id: query.data.id } }
        }
      }
    } catch (error) {
      return { error: true, message: 'Ocurrio un error haciendo el login' }
    }
  }
}
