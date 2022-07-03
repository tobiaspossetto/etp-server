"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPassword = void 0;
const bcrypt_nodejs_1 = __importDefault(require("bcrypt-nodejs"));
exports.validPassword = (passwordToCheck, dbPassword) => {
    return bcrypt_nodejs_1.default.compareSync(passwordToCheck, dbPassword);
};
