import mongoose from 'mongoose'

import { IBondi } from '../types/bondi'

const bondiCollection = 'bondis'

const BondiSchema = new mongoose.Schema({

  lineName: { type: String, required: true },
  unitName: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }

})

export const BondiModel = mongoose.model<IBondi>(bondiCollection, BondiSchema)
