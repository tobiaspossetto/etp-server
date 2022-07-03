"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnectionMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// eslint-disable-next-line require-jsdoc
function getConnectionMongo() {
    try {
        // eslint-disable-next-line quotes
        mongoose_1.default.connect(`mongodb+srv://tobias:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0.ulmpx.mongodb.net/ecommerce?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');
    }
    catch (error) {
        console.log(error);
    }
}
exports.getConnectionMongo = getConnectionMongo;
