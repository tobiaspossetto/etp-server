import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

import minimist from 'minimist'
import cookieParser from 'cookie-parser'
import { getConnectionMongo } from './dbConnection'

export const args = minimist(process.argv.slice(2))
const cloudinary = require('cloudinary')

export const app = express()
export const PORT = process.env.PORT || 4000

console.log(args._[0])
dotenv.config()
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})
app.use(morgan('dev'))
app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieParser())
getConnectionMongo()

export default app
