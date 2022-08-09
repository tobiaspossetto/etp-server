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
Object.defineProperty(exports, "__esModule", { value: true });
const Bondi_model_1 = require("../models/Bondi.model");
const validPassword_1 = require("../validPassword");
class BondiDaos {
    static findByLineAndUnit(lineName, unitName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bondi = yield Bondi_model_1.BondiModel.findOne({ lineName, unitName });
                if (bondi) {
                    return { error: false, data: bondi };
                }
                else {
                    return { error: true, message: 'no encontrado' };
                }
            }
            catch (error) {
                console.error(error);
                return { error: true, message: 'ocurrio un error al consultar en la dase de datos' };
            }
        });
    }
    static checkPassword(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bondiPassword = yield Bondi_model_1.BondiModel.findById(id);
                if (bondiPassword) {
                    const result = yield validPassword_1.validPassword(password, bondiPassword.password);
                    if (result) {
                        return { error: false, message: 'password correcto' };
                    }
                    else {
                        return { error: true, message: 'password incorrect' };
                    }
                }
                else {
                    return { error: true, message: 'ocurrio un error al consultar en la dase de datos' };
                }
            }
            catch (error) {
                console.error(error);
                return { error: true, message: 'ocurrio un error al consultar en la dase de datos' };
            }
        });
    }
}
exports.default = BondiDaos;
