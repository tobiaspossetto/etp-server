"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.encryptPassword = (password) => {
    return bcryptjs_1.default.hashSync(password, 10);
};
