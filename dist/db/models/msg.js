"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Msg = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const msgCollection = 'msgs';
const MsgSchema = new mongoose_1.default.Schema({
    author: {
        type: Object,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: true
    }
});
exports.Msg = mongoose_1.default.model(msgCollection, MsgSchema);
