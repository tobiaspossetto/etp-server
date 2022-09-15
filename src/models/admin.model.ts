import mongoose from 'mongoose'

const adminCollection = 'admin'

const AdminSchema = new mongoose.Schema({

  username: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }

})

export const AdminModel = mongoose.model(adminCollection, AdminSchema)
