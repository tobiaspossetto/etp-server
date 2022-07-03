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
const msg_1 = require("../db/models/msg");
class MsgController {
    saveMessage(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const message = {
                    author: Object.assign({}, msg.author),
                    message: msg.message,
                    created_at: new Date().toISOString()
                };
                console.log('MENSAJE A GUARDAR ', message);
                try {
                    const newMsg = new msg_1.Msg(message);
                    const res = yield newMsg.save();
                    return { status: 1, data: res };
                }
                catch (error) {
                    return { status: -1, data: error };
                }
            }
            catch (error) {
                console.error(error);
                return { status: -1, data: error };
            }
        });
    }
    getMessages() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield msg_1.Msg.find();
                return { status: 1, data };
            }
            catch (error) {
                console.error(error);
                return { status: -1, data: error };
            }
        });
    }
}
exports.default = MsgController;
