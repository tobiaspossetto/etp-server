"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("console"));
const Bondi_service_1 = __importDefault(require("../services/Bondi.service"));
class BondiController {
    static Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.lineName && !req.body.unitName && !req.body.password) {
                    return res.status(400).json({ error: true, message: 'Faltan campos o estan incorrectos' });
                }
                const result = yield Bondi_service_1.default.Login(req.body);
                if (result.error) {
                    console_1.default.log(result);
                    return res.status(400).json(result);
                }
                else {
                    console_1.default.log(result);
                    return res.json({ error: false, data: result.data }).status(200);
                }
            }
            catch (error) {
                return res.status(500).json({ error: true, message: 'Error del servidor' });
            }
        });
    }
    static sendCoordenadas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.coord) {
                    return res.status(400).json({ error: true, message: 'Hay un dato incorrecto' });
                }
                // @ts-ignore
                req.io.emit(req.user.lineName, req.user.unitName, req.body.coord);
                console_1.default.log(req.user.lineName, req.user.unitName, req.body.coord);
                res.status(200).json({ error: false, message: 'Coordenadas enviadas' });
            }
            catch (error) {
                console_1.default.error(error);
                res.status(500).json({ error: true, message: 'Error del servidor' });
            }
        });
    }
}
exports.default = BondiController;
