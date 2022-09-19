import ExposicionesDaos from '../daos/exposiciones.daos'
const Cloudinary = require('cloudinary')
export default class ExposicionesService {
  static async saveExposicion (data:any) {
    try {
      console.log('LLEGA AL SERVICE')
      const resultUpload = await Cloudinary.v2.uploader.upload(data.audioSrc, { resource_type: 'video' })
      console.log('TRATANDO DE SUBIR')
      if (!resultUpload) {
        console.error('Error con el cloudinary')
        return { error: true, message: 'Ocurrio un error subiendo el archivo a la nube' }
      }

      data.audioUrl = resultUpload.url
      data.audioPublicId = resultUpload.public_id
      data.type = resultUpload.format

      delete data.audioSrc

      const res = await ExposicionesDaos.saveExposicion(data)
      return res
    } catch (error) {
      console.error(error)
      return { error: true, message: 'Ocurrio un error creando la exposicion' }
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
