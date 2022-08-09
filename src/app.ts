import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

import minimist from 'minimist'
import cookieParser from 'cookie-parser'
import { getConnectionMongo } from './dbConnection'

export const args = minimist(process.argv.slice(2))

export const app = express()
export const PORT = args._[0] || process.env.PORT || 4000

console.log(args._[0])
dotenv.config()

app.use(morgan('dev'))
app.use(cors({ origin: '*' }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieParser())
getConnectionMongo()

export default app
