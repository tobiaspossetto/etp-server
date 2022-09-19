import { body } from 'express-validator'

export const signInSchema = [
  body('email').notEmpty().withMessage('Hay un campo vacio').isEmail().withMessage('Falta el campo email o es incorrecto'),
  body('password').notEmpty().withMessage('Hay un campo vacio').isString().withMessage('Falta el campo password o es incorrecto')

]

export const turnoSchema = [
  body('nombreDelTitular').notEmpty().withMessage('Hay un campo vacio').isString().withMessage('Falta el campo nombreDelTitular o es incorrecto'),
  body('cantidadPersonas').notEmpty().withMessage('Hay un campo vacio').isNumeric().isInt({ min: 0 }).withMessage('Falta el campo cantidadPersonas o es incorrecto'),
  body('idioma').notEmpty().withMessage('Hay un campo vacio').isString().withMessage('Falta el campo idioma o es incorrecto'),
  body('fecha').notEmpty().withMessage('Hay un campo vacio').isDate().withMessage('Falta el campo fecha o es incorrecto')

]

export const exposicionesSchema = [
  body('nombre').notEmpty().withMessage('Hay un campo vacio').isString().withMessage('Falta el campo nombre o es incorrecto'),
  body('descripcion').notEmpty().withMessage('Hay un campo vacio').isString().withMessage('Falta el campo descripcion o es incorrecto'),
  body('idiomasDisponibles').notEmpty().withMessage('Hay un campo vacio').isString().withMessage('Falta el campo idiomasDisponibles o es incorrecto - deben estar separado por ,'),
  body('horas').notEmpty().withMessage('Hay un campo vacio').isNumeric().isInt({ min: 0 }).withMessage('Falta el campo horas o es incorrecto')

]
