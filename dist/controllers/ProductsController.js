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
const product_1 = require("../db/models/product");
class ProductsController {
    saveProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = {
                    title: data.title,
                    price: data.price,
                    thumbnail: data.thumbnail,
                    created_at: new Date().toISOString()
                };
                try {
                    const newModel = new product_1.Product(newProduct);
                    const res = yield newModel.save();
                    return { status: 1, data: res };
                }
                catch (error) {
                    console.error(error);
                    return { status: -1, data: error };
                }
            }
            catch (error) {
                console.error(error);
                return { status: -1, data: error };
            }
        });
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('listando');
                const res = yield product_1.Product.find();
                return { status: 1, data: res };
            }
            catch (error) {
                console.error(error);
                return { status: -1, data: error };
            }
        });
    }
}
exports.default = ProductsController;
