import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Request, Response, NextFunction } from 'express'
dotenv.config()

export const createToken = (id:string) => {
  const token = jwt.sign({
    id
  }, <string>process.env.JWT_SECRET_KEY, { expiresIn: '2h' })

  // ! el token se devuelve al usuario para enviarlo en el header
  return token
}

export const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  const token = req.header('Authorization')
  console.log(token)
  if (!token) return res.status(403).json({ error: true, message: 'Acceso denegado' })
  try {
    const verified = jwt.verify(token, <string>process.env.JWT_SECRET_KEY)
    req.user = verified
    next() // continuamos
  } catch (error) {
    console.error(error)
    return res.status(403).json({ error: true, message: 'Acceso denegado' })
  }
}
