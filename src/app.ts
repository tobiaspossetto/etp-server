import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes/routes'
import minimist from 'minimist'
import cookieParser from 'cookie-parser'

export const args = minimist(process.argv.slice(2))

const app = express()
export const PORT = args._[0] || process.env.PORT || 4000

console.log(args._[0])
dotenv.config()
app.use(morgan('dev'))
app.use(cors({ origin: true }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieParser())

app.set('views', './src/views')
app.set('view engine', 'pug')

export default app
