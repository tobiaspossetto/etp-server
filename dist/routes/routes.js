"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
// Very simple example
Router.post('/coordenadas', (req, res) => {
    try {
        // @ts-ignore
        req.io.emit('coordenadas', req.body);
        res.json({ error: false, message: 'Coordenadas enviadas' });
    }
    catch (error) {
        console.error(error);
        res.json({ error: true, message: 'ocurrio un error al enviar' });
    }
});
module.exports = Router;
