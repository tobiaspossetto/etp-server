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
const Bondi_daos_1 = __importDefault(require("../daos/Bondi.daos"));
const jwt_1 = require("../middleware/jwt");
class BondiService {
    static Login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bondi = yield Bondi_daos_1.default.findByLineAndUnit(data.lineName, data.unitName);
                if (bondi.error) {
                    return { error: true, message: bondi.message };
                }
                else {
                    const checkPassword = yield Bondi_daos_1.default.checkPassword(bondi.data.id, data.password);
                    if (checkPassword.error) {
                        console.log('Contraseña incorrecta');
                        return { error: true, message: checkPassword.message };
                    }
                    else {
                        const token = jwt_1.createToken(bondi.data.id);
                        return { error: false, data: { token, id: bondi.data.id, lineName: bondi.data.lineName, unitName: bondi.data.unitName } };
                    }
                }
            }
            catch (error) {
                return { error: true, message: 'Ocurrio un error haciendo el login' };
            }
        });
    }
}
exports.default = BondiService;
