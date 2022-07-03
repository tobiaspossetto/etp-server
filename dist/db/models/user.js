"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_nodejs_1 = __importDefault(require("bcrypt-nodejs"));
const userCollection = 'users';
const UserSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});
UserSchema.methods.encryptPassword = (password) => {
    return bcrypt_nodejs_1.default.hashSync(password, bcrypt_nodejs_1.default.genSaltSync(10));
};
exports.User = mongoose_1.default.model(userCollection, UserSchema);
