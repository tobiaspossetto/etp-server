import { NextFunction, Request, Response } from 'express'
import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, './src/audio')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
export const upload = multer({ storage })

export const multerCheck = async (req: Request, res: Response, next: NextFunction) => {
  const file = req.file
  if (!file) {
    console.error('no hay file')
    // No entiendo por que me retorna un 200 y no un 400
    return res.json({ error: true, data: ['Falta el campo audio'] }).status(400)
  } else {
    next()
  }
}
