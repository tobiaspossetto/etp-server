"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.createToken = (data) => {
    const token = jsonwebtoken_1.default.sign({
        id: data.id, username: data.name, email: data.email
    }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    // ! el token se devuelve al usuario para enviarlo en el header
    return token;
};
exports.verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token)
        return res.status(403).json({ error: true, data: { message: 'Acceso denegado' } });
    try {
        const verified = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
        req.user = verified;
        next(); // continuamos
    }
    catch (error) {
        return res.status(403).json({ error: true, data: { message: 'Acceso denegado' } });
    }
};
