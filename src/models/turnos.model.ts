import mongoose from 'mongoose'

const turnosCollection = 'turnos'

const TurnosSchema = new mongoose.Schema({

  nombreDelTitular: { type: String, required: true },
  cantidadPersonas: { type: Number, required: true },
  idioma: { type: String, required: true },
  fecha: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }

})

export const TurnosModel = mongoose.model(turnosCollection, TurnosSchema)
