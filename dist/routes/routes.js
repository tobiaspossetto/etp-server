"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { encryptPassword } from '../encryptPassword'
// import { BondiModel } from '../models/Bondi.model'
const Bondi_ctrl_1 = __importDefault(require("../controllers/Bondi.ctrl"));
const jwt_1 = require("../middleware/jwt");
const Router = express_1.default.Router();
Router.post('/coordenadas', jwt_1.verifyToken, Bondi_ctrl_1.default.sendCoordenadas);
Router.post('/login', Bondi_ctrl_1.default.Login);
// SIGN UP -- SOLO SE USÓ DESDE EL SERVIDOR PARA GENERAR
// Router.post('/crearBondi', async (req: Request, res: Response) => {
//   const bondi = req.body
//   try {
//     bondi.password = await encryptPassword(bondi.password)
//     const result = await BondiModel.create(bondi)
//     res.json({ error: false, message: 'Bondi creado', data: result.id })
//   } catch (error) {
//     console.error(error)
//     res.json({ error: true, message: 'ocurrio un error al crear' })
//   }
// })
module.exports = Router;
