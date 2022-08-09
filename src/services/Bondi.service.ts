import BondiDaos from '../daos/Bondi.daos'
import { createToken } from '../middleware/jwt'
export default class BondiService {
  static async Login (data:any) {
    try {
      const bondi:any = await BondiDaos.findByLineAndUnit(data.lineName, data.unitName)
      if (bondi.error) {
        return { error: true, message: bondi.message }
      } else {
        const checkPassword = await BondiDaos.checkPassword(bondi.data.id, data.password)
        if (checkPassword.error) {
          console.log('Contraseña incorrecta')

          return { error: true, message: checkPassword.message }
        } else {
          const token = createToken(bondi.data)
          return { error: false, data: { token, id: bondi.data.id, lineName: bondi.data.lineName, unitName: bondi.data.unitName } }
        }
      }
    } catch (error) {
      return { error: true, message: 'Ocurrio un error haciendo el login' }
    }
  }
}
