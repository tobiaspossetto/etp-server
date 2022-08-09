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
        switch (req.body.entity) {
            case 'a':
                // @ts-ignore
                req.io.emit('a', req.body);
                break;
            case 'b':
                // @ts-ignore
                req.io.emit('b', req.body);
                break;
            default:
                return res.json({ error: true, message: 'entidad desconocida' });
        }
        res.json({ error: false, message: 'Coordenadas enviadas' });
    }
    catch (error) {
        console.error(error);
        res.json({ error: true, message: 'ocurrio un error al enviar' });
    }
});
module.exports = Router;
