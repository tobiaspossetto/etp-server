"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BondiModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bondiCollection = 'bondis';
const BondiSchema = new mongoose_1.default.Schema({
    lineName: { type: String, required: true },
    unitName: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
exports.BondiModel = mongoose_1.default.model(bondiCollection, BondiSchema);
