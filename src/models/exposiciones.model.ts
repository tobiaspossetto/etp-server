import mongoose from 'mongoose'

const exposicionesCollection = 'exposiciones'

const ExposicionesSchema = new mongoose.Schema({

  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  idiomasDisponibles: { type: Array, required: true },
  horas: { type: Number, required: true },
  audioUrl: { type: String, required: true },
  audioPublicId: { type: String, required: true },
  type: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }

})

export const ExposicionesModel = mongoose.model(exposicionesCollection, ExposicionesSchema)
